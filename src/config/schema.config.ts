import { index, pgTable, bigint, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().unique(),
    fullName: varchar('full_name', { length: 256 }),
  },
  (users) => ({
    nameIdx: index('name_idx').on(users.fullName),
  })
);

export const authOtps = pgTable('auth_otp', {
  id: bigint('id', { mode: 'number' }).primaryKey().unique(),
  phone: varchar('phone', { length: 256 }),
  userId: bigint('user_id', { mode: 'number' }).references(() => users.id),
});
