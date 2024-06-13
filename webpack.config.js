const path = require('path');

module.exports = {

    entry:{
        index: "./src/index.ts"
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.ts"
    },

    mode: "development",
    resolve: {
        extensions: ['.ts'],
    },
    module:{rules:[
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]},
    plugins:[],
    devServer:{}
}