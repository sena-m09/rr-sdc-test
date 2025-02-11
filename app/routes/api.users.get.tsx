import type { Route } from "./+types/api.users.get";
import { db } from '../db/client.server';
import { users } from '../db/schema';

export async function loader({ context }: Route.LoaderArgs) {
  const dbClient = db(context.cloudflare.env);
  const usersTable = await dbClient.select().from(users);

  return { users: usersTable };
}
