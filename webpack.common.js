'use strict'
const path = require('path')
const HmtlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
    console.log(path.join(__dirname, dir))
    return path.join(__dirname, dir)
  }

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions:['.js','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new HmtlWebpackPlugin({
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}