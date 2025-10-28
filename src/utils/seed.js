import { faker } from "@faker-js/faker";
import db from "../lib/db.js";



// Main categories
const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

// Subcategories (linked to Electronics for now)
const subcategories = [
  "Phones",
  "Computers",
  "Smartwatch",
  "Camera",
  "Headphones",
  "Gaming",
];

async function seed() {

  // Insert categories
  const categoryIds = {};
  for (const name of categories) {
    const res = await db.query(
      `INSERT INTO categories (name) VALUES ($1) RETURNING id`,
      [name]
    );
    categoryIds[name] = res.rows[0].id;
  }

  // Insert subcategories under Electronics
  const subcategoryIds = {};
  for (const name of subcategories) {
    const res = await db.query(
      `INSERT INTO subcategories (name, category_id) VALUES ($1, $2) RETURNING id`,
      [name, categoryIds["Electronics"]]
    );
    subcategoryIds[name] = res.rows[0].id;
  }

  // Insert products
  for (let i = 0; i < 40; i++) {
    const categoryName = faker.helpers.arrayElement(categories);
    const categoryId = categoryIds[categoryName];

    let subcategoryId = null;
    if (categoryName === "Electronics") {
      const subName = faker.helpers.arrayElement(subcategories);
      subcategoryId = subcategoryIds[subName];
    }

    await db.query(
      `INSERT INTO products (name, description, price, stock, image_url, category_id, subcategory_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        faker.commerce.productName(),
        faker.commerce.productDescription(),
        faker.commerce.price({ min: 10, max: 1000, dec: 2 }),
        faker.number.int({ min: 1, max: 100 }),
        `https://picsum.photos/seed/${faker.string.uuid()}/300/300`,
        categoryId,
        subcategoryId,
      ]
    );
  }

  console.log("✅ Seed completed!");
  await db.end();
}

seed().catch(console.error);
