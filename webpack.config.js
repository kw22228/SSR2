// webpack routing
module.exports = function (env) {
  const name = env.dev ? "dev" : env.server ? "server" : "client";
  return require(`./webpack.${name}.js`);
};
