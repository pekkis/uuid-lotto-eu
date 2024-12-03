// @ts-check
import { defineConfig } from "astro/config";
import aws from "astro-sst";

export default defineConfig({
  output: "server",
  adapter: aws(),
});

// https://astro.build/config
// export default defineConfig({});
