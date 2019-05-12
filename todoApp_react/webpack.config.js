var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: bundle.js,
        publicPath: '/app/'
    },
    module: {
        loaders: [{
                test: /.\js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                query: ['react', 'es2015']
            },
            {
                test: /.\css$/,
                loader: 'style-loader! css-loader'
            }
        ]
    }

}