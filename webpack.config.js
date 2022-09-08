import path from 'path'

const config = {
  mode: 'development',
  entry: {
    '010-default': path.join(path.resolve(), '/demos/010-default.ts')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  output: {
    filename: `[name].development.js`,
    path: path.join(path.resolve(), '/demos'),
    clean: false
  }
}

export default config
