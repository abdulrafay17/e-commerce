import db from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const { itemsInCart, user_id } = body;
    console.log(itemsInCart, user_id);
    try {
        if (itemsInCart.length > 0) {
            const response = await db.query('INSERT INTO cart ("order", user_id) VALUES ($1, $2) RETURNING *', [JSON.stringify(itemsInCart), user_id]);
            return NextResponse.json({message: 'INSERTING DONE FROM POST', row: response.rows[0]});
        }
        
        return NextResponse.json({message: 'FUCK YOU! FROM POST'});
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'INSERTING FAILED' }, { status: 500 });
    }
}