import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "tryspeaking",
});

export const db: NodePgDatabase = drizzle(pool);
migrate(db, { migrationsFolder: "drizzle" });
