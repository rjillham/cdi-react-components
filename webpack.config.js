var path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        components: './src/components.js'
    },
    mode:  'development',
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    // add the babel-loader and presets
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ['es2015', 'react'] }
                }]
            }
        ]
    }
    // end of babel-loader
};