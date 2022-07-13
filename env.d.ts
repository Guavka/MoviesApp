/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string,
  readonly VITE_APP_API_URL: string,
  readonly VITE_APP_MOVIES_PER_PAGE: number
  readonly VITE_APP_POSTER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}