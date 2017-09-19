/**
 * Created by wokustrzyk on 13.09.2017.
 */
var path = require('path');
module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader'},
            { test: path.join(__dirname, 'js'), loader: 'babel-loader' }
        ]
    }
};