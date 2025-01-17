import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'tests/main.jsx',
  output: {
    format: 'iife',
    file: 'tmp/tests.js',
    sourcemap: 'inline'
  },
  plugins: [
    sourcemaps(), // read sourcemaps from input files
    replace({ // important it goes first
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': '"development"' // needed for @testing-library/react
      }
    }),
    nodeResolve(),
    commonjs({ // for importing commonjs modules
    }),
    babel({ // will automatically use babel.config.js
      babelHelpers: 'bundled',
      inputSourceMap: false, // only way sourcemaps plugin will work
    }),
    postcss({
      config: false // don't look in current and parent dirs for a config
    })
  ]
}
