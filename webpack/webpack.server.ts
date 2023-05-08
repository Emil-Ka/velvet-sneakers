import path from 'path';
import webpack from 'webpack';

const serverForSsrConfig: webpack.Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'server', 'ssr', 'index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'server', 'ssr'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /(\.module)?\.s[ac]ss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
  },
};

export default serverForSsrConfig;
