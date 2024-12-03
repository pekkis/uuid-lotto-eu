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
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const host = "uuid-lotto.eu";
    const subdomain = $app.stage === "production" ? "www" : $app.stage;

    new sst.aws.Astro("UuidLotto", {
      domain: `${subdomain}.${host}`,
    });
  },
});
