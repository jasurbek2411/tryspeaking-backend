import "dotenv/config";
import type { Config } from "drizzle-kit";
export default {
  schema: "./src/config/schema.config.ts",
  out: "./drizzle",
  driver: "pg",
  verbose: true,
  strict: true,
  dbCredentials: {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: String(process.env.DB_NAME,)
  },
} satisfies Config;
