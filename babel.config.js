module.exports = {
  env: {
    test: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-reanimated/plugin'],
    },
  },
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@assets': './assets',
          '@typings': './types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  exclude: ['**/*.png', '**/*.jpg', '**/*.gif'],
};
