const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@lib'] = path.resolve(__dirname, 'lib/');

    return config
  },
}
