
import { Pool } from "pg";

const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'ecommerce',
    password: 'admin123',
    port: 5432
});

export default db;