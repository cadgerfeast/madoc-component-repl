module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/test/**/*.spec.js?(x)'
  ],
  setupFiles: [
    './test/mocks/setup.js'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}'
  ]
};
