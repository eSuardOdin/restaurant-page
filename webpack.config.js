const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        about:    './src/about.js',
        contact:    './src/contact.js',
        homepage: './src/homepage.js',
        index:    './src/index.js',
        print:    './src/print.js',
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization:{
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        }),
    ],
    devtool: 'inline-source-map', // In order to know wich file is throwing error
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    }

};