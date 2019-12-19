console.log('babel was loaded')

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    ['module-resolver', {
      root: [__dirname],
      extensions: ['.js', '.jsx'],
      alias: {
        '@': `${__dirname}/src`
      }
    }]
  ]
}
