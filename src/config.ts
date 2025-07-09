import { getSecret } from "astro:env/server";

const config = {
  X_RAPID_API_KEY: getSecret("X_RAPID_API_KEY"),
};

export { config };
