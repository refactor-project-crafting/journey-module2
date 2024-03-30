import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No se proporcionó ningún código", { status: 401 });
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

  if (error) {
    return new Response(error.message, { status: 401 });
  }

  const { data: dbAppsData, error: dbAppsError } = await supabase
    .from("apps")
    .select("id")
    .eq("name", import.meta.env.APP_NAME)
    .single();

  if (dbAppsError) {
    return new Response("Error retrieving app: " + dbAppsError.message, {
      status: 500,
    });
  }

  const { data: dbUserData, error: dbUserError } = await supabase
    .from("users")
    .select("*")
    .eq("app_id", dbAppsData.id)
    .eq("username", data.user.user_metadata.user_name);

  if (dbUserError) {
    return new Response("Error retrieving user: " + dbUserError.message, {
      status: 500,
    });
  }

  if (!dbUserData) {
    return new Response("Sin autorización", { status: 401 });
  }

  const { access_token, refresh_token } = data.session;

  cookies.set("sb-username", data.user.user_metadata.user_name, {
    path: "/",
  });
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/");
};
