const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // caminho de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // caminho de saida
    filename: 'bundle.js' // nome do arquivo de saida
  },
  resolve: {
    extensions: ['.js', '.jsx'], // tipo de arquivos utilizados para conversão
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // responsavel na observações de alterações e mudanças
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
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