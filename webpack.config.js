const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require("start-server-nestjs-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'main': ['webpack/hot/poll?100', './src/main.ts'],
    },
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            allowlist: ['webpack/hot/poll?100']
        })
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'nosources-source-map',
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['!swagger.json']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new StartServerPlugin({ name: 'main.js' }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
};
