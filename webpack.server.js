const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    target: 'node', // server쪽 node환경이기때문에 node, 보통 web

    node: false, // node.js의 프로퍼티를 사용할지 말지에 대한 내용.

    entry: {
        server: './src/server.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // chunkFilename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: { allowTsInNodeModules: true },
                    },
                ],
            },
            {
                test: /\.node/,
                type: 'asset/resource',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    externals: [nodeExternals()],
};
