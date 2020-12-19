const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'components/');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'utils/');
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'styles/');
    config.resolve.alias['@copies'] = path.resolve(__dirname, 'copies/');
    config.resolve.alias['@config'] = path.resolve(__dirname, 'config/');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'hooks/');

    return config
  },
}
