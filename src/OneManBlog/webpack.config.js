module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname,
        filename: "./wwwroot/app/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};