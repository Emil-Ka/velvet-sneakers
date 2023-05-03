import webpack from 'webpack';
import 'webpack-dev-server';

import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

<<<<<<<< HEAD:webpack/webpack.client.ts
const clientConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'main.client.tsx'),
========
const config: webpack.Configuration = {
  entry: path.resolve(__dirname, 'src', 'main.client.tsx'),
>>>>>>>> origin/feature/ssr:webpack.config.ts
  output: {
    path: path.resolve(__dirname, '..', 'client'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'assets'),
          to: path.resolve(__dirname, '..', 'client', 'assets'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'www', 'index.html'),
      filename: path.resolve(__dirname, '..', 'client', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
  },
  devServer: {
    port: 3000,
    static: [path.resolve(__dirname, 'client')],
    historyApiFallback: true,
  },
};

const serverForClientConfig: webpack.Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'client.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'server'),
    filename: 'client.js',
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
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
  },
};

export default [clientConfig, serverForClientConfig];
