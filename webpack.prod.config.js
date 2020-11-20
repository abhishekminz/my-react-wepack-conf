const path = require('path');

module.exports = (env) => {
    return {
        output: {
            filename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'build'),
        },
    }
}