import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userid');
  try {
    const response = await db.query("SELECT * FROM cart WHERE user_id = $1", [userId]);
    if (response.rows.length === 0) {
        return NextResponse.json({message: 'USER CART DOESNT EXIST', success: false,});
    } else {
        return NextResponse.json({message: 'USER CART EXIST', success: true, order: response.rows[0]?.order});
    }
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database fetch failed" }, { status: 500 });
  }
}
