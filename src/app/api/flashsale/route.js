import db from "@/lib/db";

export async function GET() {

    const result = await db.query(`
        SELECT 
            p.id AS product_id,
            p.name AS product_name,
            p.description,
            p.price,
            p.stock,
            p.image_url,
            p.sale,
            c.id AS category_id,
            c.name AS category_name
            FROM products p
            JOIN categories c ON p.category_id = c.id
            WHERE p.sale IS NOT NULL
    `);

    return Response.json(result.rows);
}