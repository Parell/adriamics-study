const path = require('node:path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const repoRoot = path.resolve(__dirname, '..', '..', '..');
const mathjaxRoot = path.join(repoRoot, 'node_modules', '@mathjax', 'src');

module.exports = {
  mode: 'production',
  target: ['web', 'es2015'],
  entry: path.join(__dirname, 'custom-mathjax.js'),
  output: {
    path: path.resolve(__dirname, '..', 'mathjax'),
    filename: 'mathjax.min.js'
  },
  resolve: {
    alias: {
      '#root/root.js': path.join(mathjaxRoot, 'mjs', 'components', 'mjs', 'root.js'),
      '#root/sre-root.js': path.join(mathjaxRoot, 'mjs', 'components', 'mjs', 'sre-root.js'),
      '#js': path.join(mathjaxRoot, 'mjs'),
      '#source': path.join(mathjaxRoot, 'components', 'mjs'),
      '#default-font': path.join(repoRoot, 'node_modules', '@mathjax', 'mathjax-newcm-font', 'mjs')
    },
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /[\\/]components[\\/]startup\.js$/,
        use: path.join(__dirname, 'strip-hasown-option-loader.cjs')
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/@mathjax\/src\/js\//, resource => {
      resource.request = resource.request.replace('@mathjax/src/js/', '@mathjax/src/mjs/');
    }),
    new webpack.NormalModuleReplacementPlugin(
      /[\\/]startup[\\/]hasown\.js$/,
      path.join(__dirname, 'empty-module.js')
    )
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({extractComments: false})]
  }
};
