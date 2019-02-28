const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = {
    nodeEnv: new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: `'${process.env.NODE_ENV}'`
        }
    }),
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.css$/,
          use: [{
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped'
            }
          }]
        },
        {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[hash:7].[ext]',
            publicPath: '/img',
            outputPath: 'img',
            emitFile: true
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            // Images larger than 10 KB won’t be inlined
            limit: 10 * 1024,
            // Remove quotes around the encoded URL –
            // they’re rarely useful
            noquotes: true,
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
            outputPath: 'media'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
            outputPath: 'fonts'
          }
        },
        {
          test: /\.yml$/,
          loader: 'yml-loader'
        }
    ],
    resolve: {
      extensions: [".js", '.jsx', ".json", ".scss", ".yml"],
      alias: {
         '@': path.resolve(__dirname, './src'),
         'public': path.resolve(__dirname, './public'),
         'modules': path.resolve(__dirname, './modules'),
         'py': path.resolve(__dirname, './py')
      }
    }
};

module.exports = [
    {
        // client side rendering
        target: 'web',
        entry: {
            client: './src/client/index.js'
        },
        output: {
            path: common.path,
            filename: '[name].js',
            publicPath: common.publicPath
        },
        plugins: [
            common.nodeEnv,
            new HtmlWebPackPlugin({
                template: './src/client/index.html',
                filename: './index.html'
            })
        ],
        resolve: common.resolve,
        module: {
            rules: common.rules
        },
        devtool: 'eval-source-map',
        devServer: {
            contentBase: common.path,
            publicPath: common.publicPath,
            hot: true,
            open: true,
            hot: true,
            historyApiFallback: true
        },
        optimization: {
          minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            })
          ]
        }
    },
    {
        // server side rendering
        target: 'node',
        entry: {
            server: './src/server/server.js'
        },
        output: {
            path: common.path,
            filename: '[name].js',
            publicPath: common.publicPath,
            libraryTarget: 'commonjs2',
        },
        externals: [nodeExternals()],
        plugins: [
            common.nodeEnv,
            new CleanWebpackPlugin(['dist'], {verbose: true})
        ],
        resolve: common.resolve,
        module: {
            rules: common.rules
        }
    }
];
