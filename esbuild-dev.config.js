#!/usr/bin/env node
// https://www.colby.so/posts/live-reloading-with-esbuild-and-rails

const path = require('path')
const http = require('http')
const fs = require('fs')
const crypto = require('crypto')
const graphql = require('graphql')

const watch = process.argv.includes('--watch')
const clients = []

// Plugin to use Relay with esbuild
// https://gist.github.com/sciyoshi/34e5865f2523848f0d60b4cdd49382ee
const relay = {
  name: "relay",
  setup: build => {
    build.onLoad({ filter: /\.tsx$/, namespace: "" }, async args => {
      let contents = await fs.promises.readFile(args.path, "utf8");

      if (contents.includes("graphql`")) {
        let imports = [];

        contents = contents.replaceAll(/graphql`([\s\S]*?)`/gm, (match, query) => {
          const formatted = graphql.print(graphql.parse(query));
          const name = /(fragment|mutation|query) (\w+)/.exec(formatted)[2];
          // const hash = crypto.createHash("md5").update(formatted, "utf8").digest("hex");

          let id = `graphql__${crypto.randomBytes(10).toString("hex")}`;
          imports.push(`import ${id} from "./__generated__/${name}.graphql.ts";`);
          return id;
        });

        contents = imports.join("\n") + contents;
      }

      return {
        contents: contents,
        loader: "tsx",
      };
    });
  },
};

const watchOptions = {
  onRebuild: (error, result) => {
    if (error) {
      console.error('Build failed:', error)
    } else {
      console.log('Build succeeded')
      clients.forEach((res) => res.write('data: update\n\n'))
      clients.length = 0
    }
  }
}

console.log("CODESPACE_NAME: ", process.env.CODESPACE_NAME)

const eventSourceHost = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8080.githubpreview.dev`
  : "http://127.0.0.1:8080"

require("esbuild").build({
  entryPoints: ["application.tsx"],
  bundle: true,
  outdir: path.join(process.cwd(), "app/assets/builds"),
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  watch: watch && watchOptions,
  banner: {
    js: ` (() => new EventSource("${eventSourceHost}").onmessage = () => location.reload())();`,
  },
  plugins: [relay]
}).catch(() => process.exit(1));

http.createServer((req, res) => {
  return clients.push(
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      Connection: "keep-alive",
    }),
  );
}).listen(8080);