const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const bundleOutputDir = './wwwroot/pages';

const pages = require('./pages.config');

module.exports = {
    mode: 'development',
    entry: pages,
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        publicPath: '/pages/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.vuex'],
        alias: {
            'vue$': 'vue/dist/vue',
            'components': path.resolve(__dirname, './Client/components'),
            'pages': path.resolve(__dirname, './Client/pages')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({            
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader', include: [/Client/],
                options: {
                    loaders: {
                        ts: 'ts-loader',
                        tsx: 'babel-loader!ts-loader',
                        scss: 'sass-loader'
                    }
                }
            },
            { 
                test: /\.js$/, include: /Client/, use: 'babel-loader' 
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' },
            {
                test: /\.ts$/, loader: 'ts-loader', include: [/Client/],
                options: {
                    appendTsSuffixTo: [/TS\.vue$/]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
              }
        ]
    },
    optimization: {
        //minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                extractComments: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: 'commons',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
};
