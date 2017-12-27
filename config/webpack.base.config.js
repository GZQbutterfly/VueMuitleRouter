let webpack = require('webpack'),
    path = require('path');

// ==>
module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, '../src'),
                exclude: ['./node_modules']
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'vue$': path.resolve(__dirname,'../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: []
};
