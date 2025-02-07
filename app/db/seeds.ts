import { seed } from 'drizzle-seed';
import * as schema from './schema';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';

dotenv.config();

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, schema);
}

main();