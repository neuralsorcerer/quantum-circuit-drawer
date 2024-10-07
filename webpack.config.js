const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "quantum-circuit-drawer.js",
    path: path.resolve(__dirname, "dist"),
    library: "QuantumCircuitDrawer",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  mode: "production",
  externals: {
    "@svgdotjs/svg.js": "SVG",
  },
};
