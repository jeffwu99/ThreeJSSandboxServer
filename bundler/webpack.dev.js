const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/script.js'),
    module: {
        rules: [
            //html
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            //js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            //image files
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html'
    })],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }

}