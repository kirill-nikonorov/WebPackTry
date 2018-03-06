const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack")
module.exports = {
    entry: {
        app: ['webpack-hot-middleware/client' ,'./src/index.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: "/dist"
    },
    devtool: 'inline-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: "/",
        hot : true
    }

};