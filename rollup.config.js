import commonjs from "rollup-plugin-commonjs";

export default {
  input: "index.js",
  output: {
    file: "output.js",
    format: "iife"
  },
  plugins: [
    commonjs({
      include: ["common-entry.js", "common-foo.js"]
    })
  ]
};
