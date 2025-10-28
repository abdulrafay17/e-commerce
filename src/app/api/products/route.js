import db from "@/lib/db.js";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit');

  const res = await db.query(`
    SELECT 
      p.id, p.name, p.description, p.price, p.stock, p.image_url,
      c.name AS category,
      s.name AS subcategory
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN subcategories s ON p.subcategory_id = s.id
    ORDER BY p.id
    LIMIT $1;
  `, [limit]);

  return Response.json(res.rows);
}
