import {pgTable, serial, varchar} from 'drizzle-orm/pg-core';

export const product_idioms = pgTable("idioms", {
    id: serial('id').primaryKey(),
    derivation: varchar("derivation", {length: 255}),
    example: varchar('example', {length: 255}).notNull(),
    explanation: varchar('explanation', {length: 255}),
    pinyin: varchar("pinyin", {length: 255}),
    word: varchar("word", {length: 255}).notNull(),
    abbreviation: varchar("abbreviation", {length: 255}),
})

export type ProductIdiom = typeof product_idioms.$inferSelect;