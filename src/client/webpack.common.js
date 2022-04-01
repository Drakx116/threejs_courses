const path = require('path');

module.exports = {
  entry: './src/client/index.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../../dist/client')
  }
}

// test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
