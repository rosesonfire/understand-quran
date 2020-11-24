const path = require('path');

module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@lib'] = path.resolve(__dirname, '../', 'src/');
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../', 'src/', 'utils/');

    // Return the altered config
    return config;
  },
}
