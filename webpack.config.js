'use strict';

var path = require('path');
var colors = require('colors/safe');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    cache: true,
    debug: true,

    entry: {
        'app': './app.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[chunkhash:8].chunk.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },



    plugins: [
        new HtmlWebpackPlugin({
            title: 'angular-redux-demo',
            appName: 'angular-redux-demo',
            pkg: require('./package.json'),
            template: './index.ejs'
        })
    ]
};
