import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const body = await req.json();
  const { itemsInCart, user_id } = body;
  console.log(itemsInCart, user_id);
  try {

    const response = await db.query('UPDATE cart SET "order" = $1, user_id = $2 WHERE user_id = $2 RETURNING *', [JSON.stringify(itemsInCart), user_id]);
    if (response.rows.length > 0) {
        return NextResponse.json({message: 'INSERTING DONE FROM PUT, ', row: response.rows[0]});
    } else {
        return NextResponse.json({message: 'FUCK YOU! FROM PUT'});
    }
    
    
  } catch (error) {
      console.log(error)
      return NextResponse.json({ message: 'INSERTING FAILED' }, { status: 500 });
  }
}
