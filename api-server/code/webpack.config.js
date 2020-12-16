const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const productionConfig = require('./webpack.production');
const { merge } = require('webpack-merge');

module.exports = (env) => {
  let config = null;

  if (env.dev) {
    config = merge(commonConfig, devConfig);
  } else if (env.production) {
    config = merge(commonConfig, productionConfig);
  } else {
    throw new Error('No matching configuration was found!');
  }

  return config;
};
