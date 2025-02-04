const { ts, dts } = require('rollup-plugin-dts');

module.exports = [{
  input: './src/index.ts',
  output: [{
    file: './dist/remote-web-streams.js',
    format: 'umd',
    name: 'RemoteWebStreams'
  }, {
    file: './dist/remote-web-streams.mjs',
    format: 'es'
  }],
  plugins: [
    ts({
      tsconfig: './tsconfig.json'
    })
  ]
}, {
  input: './src/index.ts',
  output: [{
    file: './dist/types/index.d.ts',
    format: 'es'
  }],
  plugins: [
    dts({
      tsconfig: './tsconfig.json'
    })
  ]
}];
