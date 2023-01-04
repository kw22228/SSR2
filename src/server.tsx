import path from "path";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Helmet from "react-helmet";

import App from "./App";

const app = express();

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackConfig = require("../webpack.client.js");

  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      //   logLevel: "silent",
      publicPath: webpackConfig.output.publicPath,
    })
  );

  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname)));

app.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  res.set("content-type", "text/html");
  res.send(/* html */ `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, user-scalable=no">
      <meta name="google" content="notranslate">
      ${helmet.title.toString()}
    </head>
    <body>
      <div id="root">${html}</div>
      <script type="text/javascript" src="main.js"></script>
    </body>
  </html>
  `);
});

app.listen(3003, () => console.log("Server started http://localhost:3003"));
