import db from "@/lib/db.js";
import bcrypt from 'bcryptjs'

export async function POST(req) {
    const body = await req.json();
    const {name, email, password} = body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    try { 

        const check = await db.query("SELECT * FROM users WHERE contact = $1", [email]);

        if (check.rows[0]?.contact === email) {
        return Response.json({ success: false, message: 'USER EXIST' });
        }

        const resultUsers = await db.query('INSERT INTO users (name, contact, password) VALUES ($1, $2, $3) RETURNING id, name, contact',
        [name, email, hashedPassword]);
        
        const returnedId = resultUsers.rows[0]?.id;
        const returnedName = resultUsers.rows[0]?.name;
        const returnedContactOrEmail = resultUsers.rows[0]?.contact;
        
        const resultProfiles = await db.query('INSERT INTO profiles(user_id, first_name, email) VALUES ($1, $2, $3)', [returnedId, returnedName, returnedContactOrEmail])

        return Response.json({success: true, message: 'ACCOUNT CREATED SUCCESSFULLY'})
        
    } catch (error) {
        console.log(error)
        return Response.json({error, message: 'INTERNAL SERVOR ERROR'})
    }

    
}   