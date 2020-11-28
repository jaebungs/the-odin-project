const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
        ]},
            {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [{
                loader: 'file-loader'
            }]
        }
      ]}
  };