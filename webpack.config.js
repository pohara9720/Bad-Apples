module.exports = {

  // This is the entry point or start of our react application
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section describes the transformations we will perform
  module: {
    loaders: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: /app/,
                query: {
                    presets: ["react","es2015"]
                }
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
            }
        ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
