import path from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const ssrConfig: webpack.Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'main.ssr.tsx'),
  output: {
    path: path.resolve(__dirname, '..', 'ssr'),
    filename: 'build/[name].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'assets'),
          to: path.resolve(__dirname, '..', 'ssr', 'assets'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'www', 'index.html'),
      filename: path.resolve(__dirname, '..', 'ssr', 'index.html'),
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
};

const serverForSsrConfig: webpack.Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src', 'server', 'ssr.tsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'server'),
    filename: 'ssr.js',
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
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
  },
};

export default [ssrConfig, serverForSsrConfig];
