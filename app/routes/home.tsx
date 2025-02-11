import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { users } from '../db/schema';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context }: Route.LoaderArgs) {
  const message = context.cloudflare.env.VALUE_FROM_CLOUDFLARE ;
  const res = await fetch("http://localhost:5173/api/users/get");
  const users = await res.json();

  return { message, users };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const users = loaderData.users;
  console.log(users);
  return <Welcome message={loaderData.message} />;
}
