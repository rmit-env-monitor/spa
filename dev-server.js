const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

var config = require("./webpack.config.js");
const options = {
  contentBase: "./dist",
  publicPath: config.output.publicPath,
  host: "localhost",
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: true,
    publicPath: false
  },
  headers: {
    "X-Powered-By": ""
  },
  port: 8000,
  open: true,
  openPage: ""
};

webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(options.port, "0.0.0.0", () => {
  console.log(`Listening on port ${options.port}`);
});
