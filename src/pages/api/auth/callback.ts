import type { APIRoute } from "astro";
import axios from "axios";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return new Response("No se proporcionó ningún código", { status: 401 });
  }

  const githubAccessTokenUrl = `https://github.com/login/oauth/access_token?client_id=${import.meta.env.GITHUB_CLIENT_ID}&client_secret=${import.meta.env.GITHUB_CLIENT_SECRET}&code=${authCode}`;
  const githubUserUrl = "https://api.github.com/user";

  const {
    data: { access_token: accessToken },
  } = await axios.post<{ access_token: string }>(
    githubAccessTokenUrl,
    {},
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (!accessToken) {
    return new Response("Missing token", { status: 401 });
  }

  console.log("Access token: ", accessToken);

  const {
    data: { login },
  } = await axios.get<{ login: string }>(githubUserUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!login) {
    return new Response("Missing user data", { status: 401 });
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
    .from(import.meta.env.USERS_TABLE)
    .select("*")
    .eq("app_id", dbAppsData.id)
    .eq("username", login);

  if (dbUserError) {
    return new Response("Error retrieving user: " + dbUserError.message, {
      status: 500,
    });
  }

  if (!dbUserData) {
    return new Response("Sin autorización", { status: 401 });
  }

  cookies.set("trp-username", login, {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return redirect("/");
};
