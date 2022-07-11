import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

import nodeExternals from 'webpack-node-externals'

const isProduction = false;
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';
export default {
    entry: './app.js',
    target: 'node',
    mode,
    devtool,
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }],
                parser: {
                    javascript: {
                        commonjsMagicComments: true,
                    },
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.json']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        library: 'server', // very important line
        libraryTarget: 'umd', // very important line
        umdNamedDefine: true // very important line
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    experiments: {
        topLevelAwait: true
    }
};