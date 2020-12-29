const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src/index.ts')],
  experiments: {
    topLevelAwait: true,
  },
  externals: [nodeExternals({})],
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'api-server.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '@copies': path.resolve(__dirname, 'src/copies/'),
      '@src': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.js'],
  },
  target: 'node',
};
