import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "index.js",
    output: {
      name: "dist/observerable-object-js",
      file: pkg.main,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        comments: false,
        sourceMap: true,
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              loose: true
            }
          ]
        ],
        exclude: "node_modules/**"
      })
    ]
  }
];
