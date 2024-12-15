/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_LOGIN_CLIENT_ID: string;
  readonly VITE_BACKOFFICE_API_BASE_URL: string;
  readonly VITE_BACKOFFICE_API_VERSION: string;
  readonly VITE_BACKOFFICE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
