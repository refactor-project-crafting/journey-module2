/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly AUTH_SECRET: string;
  readonly AUTH_TRUST_HOST: string;
  readonly GITHUB_CLIENT_SECRET: string;
  readonly GITHUB_CLIENT_ID: string;
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly CALLBACK_URL: string;
  readonly FLAGSMITH_ENVIRONMENT: string;
  readonly APP_NAME: string;
  readonly USERS_TABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  type Locals = {
    isLogged: boolean;
  };
}
