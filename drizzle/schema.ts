import { pgTable, varchar, boolean, date, timestamp, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable('users_table',{
    id: serial('id').primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull().unique(),
    phone: varchar().notNull().unique(),
    password: varchar().notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow()
})


export const adminTable = pgTable('admin_users', {
    id: serial('id').primaryKey(),
    name: varchar().notNull(),
    email: varchar().notNull().unique(),
    phone: varchar().notNull().unique(),
    password: varchar().notNull(),
    isAdmin: boolean().notNull().default(false),
    createdAt: timestamp('created_at').notNull().defaultNow()
})