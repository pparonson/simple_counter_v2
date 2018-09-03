const path = require("path")

module.exports = {
  entry: ["./src/index"]
  , devtool: "inline-source-map"
  , output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
  , mode: "none" // dev, prod
  // , watch: true
  // , devServer: {
  //   contentBase: './'
  //   , compress: true
  //   , port: 9000
  // }
  , module: {
    rules: [
      {
        test: /\.js$/
        , exclude: /node_modules/
        , use: {
          loader: "babel-loader"
          , options: {
            presets: ["@babel/preset-env"]
            , plugins: [require("babel-plugin-transform-object-rest-spread")]
          }
        }
      }
    ]
  }
}
