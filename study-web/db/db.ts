import * as schema from "./schema"
import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from "postgres";

const client = postgres(process.env.NEXT_PUBLIC_DATABASE_URL!, {
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PWD
});
export const db = drizzle(client, {schema: schema, logger: true});