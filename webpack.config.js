import path from 'path'

const config = {
  mode: 'development',
  entry: {
    'demo': path.join(path.resolve(), '/src/demo.ts')
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
    filename: `[name].js`,
    clean: false
  }
}

export default config
