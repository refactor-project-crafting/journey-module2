import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("trp-username", { path: "/" });
  return redirect("/");
};
