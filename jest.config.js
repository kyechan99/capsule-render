module.exports = {
    clearMocks: true,
    transform: {
      "^.+\\.(js|jsx)?$": "babel-jest",
    },
    "testMatch": ["**/*.test.js"],
    testEnvironment: "node",
    coverageProvider: "v8",
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
    modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
    transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
    coveragePathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/tests/E2E/",
    ],
    prettierPath: require.resolve('prettier-2'),
  };
