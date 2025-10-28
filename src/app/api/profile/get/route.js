import jwt from 'jsonwebtoken'
import db from '@/lib/db.js';

export async function GET(req) {
  try {
    const cookie = req.headers.get("cookie");
    const token = cookie?.split("auth_token=")[1]?.split(";")[0];

    if (!token) {
      console.log("❌ No token found");
      return Response.json({ success: false, message: "No token found" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Decoded JWT:", decoded);

    const result = await db.query(
      "SELECT user_id, first_name, last_name, address, email FROM profiles WHERE email = $1",
      [decoded.userEmail]
    );

  
    console.log("✅ DB result:", result.rows);

    return Response.json({ success: true, user: result.rows[0] });
  } catch (err) {
    console.error("❌ Profile error:", err);
    return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
}
