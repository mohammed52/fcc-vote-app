module.exports = {
  entry: {
    main: "./index.js"
  },
  output: {
    path: __dirname + "/public/js",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};