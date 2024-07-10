import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: './db/schema.ts',
    out: './db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    },
    verbose: true,
    strict: true
});