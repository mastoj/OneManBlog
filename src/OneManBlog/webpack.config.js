var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app/index.jsx' // Your appʼs entry point
    ],
    output: {
        path: __dirname,
        filename: "/wwwroot/app/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['react-hot', 'babel'] },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
};
