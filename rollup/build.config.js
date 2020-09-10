const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const postCSS = require('rollup-plugin-postcss')

const jsExtensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.node']

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    }
  ],
  watch: {},
  external: [
    ...Object.keys(require('../package.json').dependencies),
    ...Object.keys(require('../package.json').devDependencies),
  ],
  plugins: [
    postCSS({}),
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
      extensions: jsExtensions
    }),
    // babel({
    //   presets: [
    //     '@babel/preset-env',
    //     '@babel/preset-react'
    //   ],
    //   plugins: [
    //     '@babel/plugin-proposal-object-rest-spread'
    //   ],
    //   exclude: 'node_modules/**'
    // }),
    resolve({
      browser: true
    }),
    commonjs({}),
  ]

}
