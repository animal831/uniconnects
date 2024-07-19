const path = require('path');

module.exports = {
    mode: 'development', // Set mode to 'development' or 'production'
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            // Add other loaders for CSS, images, etc. as needed
        ]
    }
};
