import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isDevelopment = process.env.NODE_ENV !== 'production';

export default defineConfig({
  entry: './src/main.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        type: 'css',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
      favicon: './public/favicon.svg',
    }),
  ],

  devServer: {
    port: 5173,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
});
