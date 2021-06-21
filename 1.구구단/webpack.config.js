const path = require('path');
const { webpack } = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    // 입력
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'],
                    },
                    debug: true,
                }],
                '@babel/preset-react'],
                plugins: [],
            },
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugins({ debug: true }),
    ],

    // 출력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};