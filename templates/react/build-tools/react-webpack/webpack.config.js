import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isDevelopment = process.env.NODE_ENV !== 'production';

/** @type {import('webpack').Configuration} */
export default {
  // Entry point
  entry: './src/main.tsx',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[contenthash].chunk.js',
    clean: true,
    publicPath: '/',
  },

  // Module resolution
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // Module rules
  module: {
    rules: [
      // TypeScript/TSX files
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS files
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './public/favicon.svg',
    }),
    ...(isDevelopment
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name].[contenthash].chunk.css',
          }),
        ]),
  ],

  // Development server
  devServer: {
    port: 5173,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  // Optimization
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
    runtimeChunk: 'single',
  },

  // Source maps
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  // Stats
  stats: 'minimal',
};
