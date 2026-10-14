import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import crypto from "node:crypto";
import db from "@/lib/db.js";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const email = profile?.email || user?.email;
        const fullName = profile?.name || user?.name || "Google User";
        const [firstName, ...lastNameParts] = fullName.trim().split(/\s+/);
        const lastName = lastNameParts.join(" ") || null;

        if (!email) {
          console.error("[Google OAuth] No email returned by Google");
          return false;
        }

        const client = await db.connect();
        try {
          await client.query("BEGIN");

          let existingUser = await client.query(
            "SELECT id FROM users WHERE contact = $1 FOR UPDATE",
            [email]
          );
          let userId = existingUser.rows[0]?.id;

          if (!userId) {
            const passwordHash = await bcrypt.hash(crypto.randomUUID(), 10);
            const insertedUser = await client.query(
              `INSERT INTO users (name, contact, password)
               VALUES ($1, $2, $3) RETURNING id`,
              [fullName, email, passwordHash]
            );
            userId = insertedUser.rows[0].id;
          }

          const existingProfile = await client.query(
            "SELECT user_id FROM profiles WHERE user_id = $1",
            [userId]
          );

          if (existingProfile.rows[0]) {
            await client.query(
              `UPDATE profiles SET first_name = $1, last_name = $2, email = $3
               WHERE user_id = $4`,
              [firstName, lastName, email, userId]
            );
          } else {
            await client.query(
              `INSERT INTO profiles (user_id, first_name, last_name, email)
               VALUES ($1, $2, $3, $4)`,
              [userId, firstName, lastName, email]
            );
          }

          await client.query("COMMIT");
          user.id = String(userId);
          console.log("[Google OAuth] Database user synced", JSON.stringify({ userId, email }));
        } catch (error) {
          await client.query("ROLLBACK");
          console.error("[Google OAuth] Database sync failed", error.message);
          return false;
        } finally {
          client.release();
        }
      }

      console.log("[Google OAuth] signIn", JSON.stringify({
        user,
        account: { provider: account?.provider, type: account?.type, providerAccountId: account?.providerAccountId },
        profile: { sub: profile?.sub, name: profile?.name, email: profile?.email },
      }));
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      console.log("[Google OAuth] jwt", JSON.stringify({
        token: { sub: token.sub, email: token.email, provider: token.provider, providerAccountId: token.providerAccountId },
        user: user ? { id: user.id, name: user.name, email: user.email } : undefined,
        account: account ? { provider: account.provider, type: account.type, providerAccountId: account.providerAccountId } : undefined,
        profile: profile ? { sub: profile.sub, name: profile.name, email: profile.email } : undefined,
      }));
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.provider = token.provider;
      session.user.providerAccountId = token.providerAccountId;
      console.log("[Google OAuth] session JSON", JSON.stringify(session));
      return session;
    },
    async redirect({ url, baseUrl }) {
      const redirectUrl = url.startsWith(baseUrl) ? url : baseUrl;
      console.log("[Google OAuth] redirect", JSON.stringify({ url, baseUrl, redirectUrl }));
      return redirectUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };