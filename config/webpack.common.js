module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
          test: /\.svg$/,
          use: {
              loader: 'svg-url-loader',
              options: {
                  encoding: 'base64'
              }
          }
      },
      {
        test: /\.scss|\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
