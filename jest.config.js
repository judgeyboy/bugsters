module.exports = {

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/test/testHelpers.js"
  ],

  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!**/node_modules/**",
  ],

  mapCoverage: true,

  moduleNameMapper: {
    "^@(.*)$": "<rootDir>/src$1",
    "^vue$": "vue/dist/vue.common.js"
  },

  moduleFileExtensions: [
    "js",
    "vue"
  ],

  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
  },

  snapshotSerializers: [
    "jest-serializer-html"
  ]
}
