module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2|eot|otf)$': 'jest-transform-stub',
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@vue/.*))'
    ],
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageReporters: ['lcov', 'text'],
  };
  
