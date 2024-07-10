// for migrations
import postgres from "postgres";
import {drizzle} from 'drizzle-orm/postgres-js';
import {migrate} from 'drizzle-orm/postgres-js/migrator';
import * as schema from "./schema"
import {product_idioms} from "@/db/schema";
import "dotenv/config"

const url = process.env.REACT_APP_DATABASE_URL ?? "postgres://root:123456@localhost:51861/books_center_db"
const queryConnection = postgres(url);
const db = drizzle(queryConnection, {schema: schema, logger: true});

const main = async () => {
    // const migrationClient = postgres(url, {
    //     max: 1,
    // });
    // await migrate(drizzle(migrationClient), {
    //     migrationsFolder: "./migrations"
    // })
    // await migrationClient.end()
    //
    //query
    console.log(await db.select().from(product_idioms).limit(2));
    console.log('hell\n')
    console.log(await db.query.product_idioms.findFirst());
    process.exit(0);
}

main()

