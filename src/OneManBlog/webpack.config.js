var webpack = require('webpack');
var path = require('path');
//var outPath = path.resolve(__dirname, "./wwwroot/app/bundle.js");
var outFolder = path.resolve(__dirname, "./wwwroot/app");
module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app/index.jsx' // Your appʼs entry point
    ],
    output: {
        path: outFolder,
        filename: "bundle.js",
        //filename: "/wwwroot/app/bundle.js"
        publicPath: 'http://localhost:3000/static/'
    },
    module: {
        exclude: /node_modules/,
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'babel?experimental'] },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
