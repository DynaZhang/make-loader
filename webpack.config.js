const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node_modules','./loaders']
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'schemaLoaders',
            options: {
              test: '测试下'
            }
          }
        ],
      }
    ]
  }
}
