import path from 'path'
import Webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const config: Webpack.Configuration = {
  mode: 'development',
  entry: {
    contentScripts: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'public'),
        to: path.join(__dirname, 'dist')
      }
    ],
    {
      ignore: ['.DS_Store']
    })
  ]
}

export default config
