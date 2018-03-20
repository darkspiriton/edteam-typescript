module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/clase-06/app.ts",
    output: {
      filename: 'app.js',
      path: __dirname + './dist'
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    devServer: {
        port: 8000
    }
  };