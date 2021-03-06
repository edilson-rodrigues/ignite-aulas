const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // caminho de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // caminho de saida
    filename: 'bundle.js' // nome do arquivo de saida
  },
  resolve: {
    extensions: ['.js', '.jsx'], // tipo de arquivos utilizados para conversão
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // $ determina oque deve terminar \. aceitar o ponto jsx é a extenção
        exclude: /node_modules/, // não efetuar o processo de conversão, pois é a responsabilidade de cada biblioteca
        use: 'babel-loader',
      }
    ],
  }
};