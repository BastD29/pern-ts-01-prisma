declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | "local" | "staging";
    PORT: string;
    ALLOWED_ORIGIN: string;
    DATABASE_URL: string;
  }
}
