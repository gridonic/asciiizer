const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');

const outputPath = path.resolve(__dirname, './build');
const publicPath = '/build/';

module.exports = {
    entry: './src/main.js',
    output: {
        path: outputPath,
        publicPath,
        filename: 'app.js'
    },
    devtool: (process.env.NODE_ENV === 'production') ? '#source-map' : '#eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'env'
                    ]
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: path.join('images', '[name].[hash].[ext]')
                }
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: path.join('fonts', '[name].[hash].[ext]')
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: ['*', '.vue', '.js']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        contentBase: path.resolve(__dirname, './'),
        watchOptions: {
            watch: true,
            ignored: /node_modules/,
            poll: 1000
        }
    },
    performance: {
        hints: false
    }
};

if (process.env.NODE_ENV === 'production') {
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // Since UglifyJsPlugin does not work for ES6 code for now
        // @see https://github.com/webpack-contrib/babili-webpack-plugin
        // @see https://github.com/webpack/webpack/issues/2545
        new BabiliPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
