/*jshint esversion: 6 *///解决jshint 提示w104的警告，使用ECMAScript 6特定语法
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "js/[name].[chunkHash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: "less-loader",
                        options: {

                        }
                    },
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: "public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkHash:5].css'
        }),
        
    ],
    devServer: {
        port: 3000,
        open: true

    }
    
};