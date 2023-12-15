const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-native-vector-icons', 'react-native-svg']);

module.exports = withPlugins([withTM], {
  images: {
    disableStaticImages: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [ 'url-loader?limit=10000', 'img-loader' ]
      },
    );
    return config
  },
});