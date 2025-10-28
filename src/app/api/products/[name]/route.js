import db from "@/lib/db";

export async function GET(req, context) {
  const { params } = context;
  const { name } = await params;

  const res = await db.query(
    `
    SELECT 
      p.id, p.name, p.description, p.price, p.stock, p.image_url,
      c.name AS category,
      s.name AS subcategory
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN subcategories s ON p.subcategory_id = s.id
    WHERE p.name = $1
    LIMIT 1;
    `,
    [decodeURIComponent(name)]
  );

  if (res.rows.length === 0) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return Response.json(res.rows[0]);
}
