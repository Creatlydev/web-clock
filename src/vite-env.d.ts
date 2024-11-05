/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_GEOLOCATION: string;
  readonly VITE_API_OPENWEATHER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}