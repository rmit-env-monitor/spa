var config = {
    entry: './src/index.jsx',

    output: {
        path: '/dist',
        filename: 'index.js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config