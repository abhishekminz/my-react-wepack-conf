const path = require('path');

module.exports = (env) => {
    return {    
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './public',
            // publicPath: './public',
            hot: true,
            clientLogLevel: 'none',
            noInfo: true,
            compress: true,
            stats: 'minimal',
        },
        output: {
            filename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'public'),
        },
    }
}