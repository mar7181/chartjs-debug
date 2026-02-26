import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/js/*.ts"],
  bundle: true,
  splitting: true,
  minify: false,
  mangleProps: /^_/,
  outdir: "./dist/assets/js/",
  format: "esm",
  target: ['es2020']
});
