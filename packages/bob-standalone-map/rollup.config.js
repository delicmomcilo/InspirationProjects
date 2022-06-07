import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import babel from "rollup-plugin-babel";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import reactSvg from "rollup-plugin-react-svg";
import image from "@rollup/plugin-image";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      name: "@bob/standalone-map"
    }
    // {
    //   file: packageJson.main,
    //   format: "cjs",
    //   sourcemap: true,
    //   name: "@bob/standalone-map"
    // }
  ],
  external: ["react", ...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})],
  // external: ["react", ...Object.keys(packageJson.peerDependencies || {})],
  plugins: [
    peerDepsExternal(),
    // babel({
    //   extensions: [".jsx", ".js"],
    //   exclude: "node_modules/**",
    //   // inclide: ["node_modules/"]
    // }),
    nodeResolve(
      {mainFields: ['jsnext:main', 'main', 'module']}
    ),
    commonjs(),

    image(),

    typescript()

    // url({
    //   include: ['**/*.otf'],
    //   // setting infinite limit will ensure that the files
    //   // are always bundled with the code, not copied to /dist
    //   limit: Infinity,
    // }),

    // typescript(),
  ]
};
