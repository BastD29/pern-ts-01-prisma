import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

dotenv.config({ path: `./environments/.env.${env}` });

const { NODE_ENV, ALLOWED_ORIGIN, PORT } = process.env as {
  NODE_ENV: string;
  ALLOWED_ORIGIN: string;
  PORT: string;
};

if (!NODE_ENV || !ALLOWED_ORIGIN || !PORT) {
  throw new Error("environment variables are not properly defined");
}

export { NODE_ENV, ALLOWED_ORIGIN, PORT };
