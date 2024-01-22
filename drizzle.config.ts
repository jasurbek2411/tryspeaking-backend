import type { Config } from 'drizzle-kit';
export default {
  schema: './src/config/schema.config.ts',
  out: './drizzle',
  driver: 'pg',
  verbose: true,
  strict: true,
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'asadullohpro',
    password: 'asadullohpro',
    database: 'tryspeaking',
  },
} satisfies Config;
