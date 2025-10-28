import db from "@/lib/db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export async function POST(req) {
    const body = await req.json();
    const {email, password} = body;

    try {
        const result = await db.query('SELECT * FROM users WHERE contact = $1', [email]);
        
        if (result.rows.length === 0) {
            return Response.json({ success: false, message: "USER DOES NOT EXIST, SIGN UP FIRST"})
        }

        const user = result.rows[0];
        const compare = await bcrypt.compare(password, user.password);

        
        if (!compare) {
            return Response.json({ success: false, message: "PASSWORD ENTERED IS WRONG"});
        }

        const token = jwt.sign(
            {userId: user.id, userEmail: user.contact},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );

        return new Response(
            JSON.stringify({success: true, message: 'LOGIN SUCCESSFULL'}),
            {
                headers: {
                    'Set-Cookie': `auth_token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`,
                    'Content-Type': "application/json"
                }
            }
        )

    } catch (error) {
         console.error(error);
        return Response.json({ success: false, message: "SERVER ERROR" });
    }

    
}

// const token = jwt.sign(
//             { userId: user.id, userEmail: user.contact },
//             process.env.JWT_SECRET,
//             {expiresIn: "1d"}
//         );

//         return new Response(
//             JSON.stringify({success: true, message: 'LOGIN SUCCESSFULL'}),
//             {
//                 status: 200,
//                 headers: {
//                     "Set-Cookie": `auth_token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );