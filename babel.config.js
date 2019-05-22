module.exports = {
  presets: [
    '@vue/app',
    // "@vue/babel-preset-jsx"
    // ["env", { "targets": { "node": "current" } }]
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ]
    // "transform-vue-jsx",
    // "transform-object-assign",
    // "transform-object-rest-spread",
    // "transform-class-properties",
    // "transform-runtime"
  ]
}
