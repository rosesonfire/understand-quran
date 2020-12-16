const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new NodemonPlugin({
      delay: "1000",
      script: './dist/api-server.js',
      watch: path.resolve('./dist'),
      // args: ['demo'],
      // nodeArgs: ['--debug=9222'],
      // ignore: ['*.js.map'],
      // ext: 'js,njk,json',
      // verbose: true,
    }),
  ],
};
