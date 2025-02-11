import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/users/get", "routes/api.users.get.tsx"),
] satisfies RouteConfig;
