
import db from "@/lib/db";

export async function GET(req, { params }) {
  const { subcategories } = await params;
    console.log(subcategories)
  const res = await db.query(
    `
    SELECT 
      p.id, p.name, p.description, p.price, p.stock, p.image_url,
      c.name AS category,
      s.name AS subcategory
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN subcategories s ON p.subcategory_id = s.id
    WHERE LOWER(s.name) = LOWER($1)
    ORDER BY p.id;
    `,
    [decodeURIComponent(subcategories)]
  );

  console.log(res.rows)

  return Response.json(res.rows);
}
