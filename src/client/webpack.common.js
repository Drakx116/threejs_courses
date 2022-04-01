const path = require('path');

module.exports = {
  entry: './src/client/index.ts',
  module: {
    rules: [{
      test: /\*.tsx?$/,
      use: 'ts-loader',
      exclude: '/node_modules/'
    }]
  },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx' ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../../dist/client')
  }
}
