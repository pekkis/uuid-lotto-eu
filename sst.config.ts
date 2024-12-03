/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      providers: {
        aws: {
          region: "eu-north-1",
        },
      },
      name: "uuid-lotto",
      removal: input?.stage === "main" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const host = "uuid-lotto.eu";
    const subdomain = $app.stage === "main" ? "www" : $app.stage;

    new sst.aws.Astro("UuidLotto", {
      domain: `${subdomain}.${host}`,
    });
  },
});
