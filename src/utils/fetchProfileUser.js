import { cookies } from "next/headers";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import db from "@/lib/db.js";


export default async function fetchProfileUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');

    if (!token || !token.value) {
        const session = await getServerSession(authOptions);
        const email = session?.user?.email;

        if (!email) return {};

        const result = await db.query(
            "SELECT user_id, first_name, last_name, address, email FROM profiles WHERE email = $1",
            [email]
        );

        return { success: true, user: result.rows[0] };
    }
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_FETCH_URL}/api/profile/get`, {
        method: 'GET',
        headers: {
            Cookie: `auth_token=${token.value}`
        },
        cache: "no-cache",
    });

    return await response.json();   
}