const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
              {
                test: /\.css$/,
                use: ['style-loader', {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true,
                  }
                }],
              },
              {
                test: /\.(png|svg|jpg|jpge|gif)$/i,
                type: 'asset/resource',
              },
              {
                test: /\.(woff,woff2,eot,ttf,otf)$/i,
                type: 'asset/resource',
              },
        ]
    }
};