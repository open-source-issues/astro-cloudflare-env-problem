// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  env: {
    validateSecrets: false,
    schema: {
      LIVEKIT_URL: envField.string({ context: "server", access: "secret" }),
    },
  },
  vite: {
    build: {
      minify: false,
    },
  },
});
