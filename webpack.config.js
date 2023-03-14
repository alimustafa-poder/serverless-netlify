const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./server.js",
  output: {
    path: path.resolve(__dirname, "functions"),
    filename: "bundle.js",
  },
  target: "node",
};
