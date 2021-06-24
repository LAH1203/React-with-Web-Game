const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'responsecheck-setting',
    mode: 'development',    // 실서비스에서는 production
    devtool: 'eval',    // 실서비스에서는 hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    // 입력
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'],
                    },
                    debug: true,
                }],
                '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin(),
    ],

    // 출력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        publicPath: '/dist/',
        hot: true
    },
};