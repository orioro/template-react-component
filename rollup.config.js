const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const postCSS = require('rollup-plugin-postcss')

module.exports = {
  input: 'src/index.js',
  output: {
    name: 'renderer',
    file: 'dist/index.js',
    format: 'cjs',
  },
  watch: {},
  external: [
    ...Object.keys(require('./package.json').dependencies),
    ...Object.keys(require('./package.json').devDependencies),
  ],
  plugins: [
    postCSS({}),
    babel({
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread'
      ],
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true
    }),
    commonjs({}),
  ]

}
