import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  preset: "ts-jest",

  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  testMatch: ["**/*.test.ts"],
  testEnvironment: "node",
  coverageProvider: "v8",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/tests/e2e/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/tests/E2E/",
  ],
  prettierPath: require.resolve("prettier-2"),

  // // Automatically clear mock calls, instances, contexts and results before every test
  // clearMocks: true,

  // // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // // The directory where Jest should output its coverage files
  // coverageDirectory: "coverage",

  // // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "v8",

  // // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node",
  // ],

  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  // },

  // // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/$1",
  // },

  // // The test environment that will be used for testing
  // testEnvironment: "jest-environment-node",

  // // The glob patterns Jest uses to detect test files
  // // testMatch: [
  // //   "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
  // //   "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  // // ],
  // testMatch: [
  //   "<rootDir>/**/data.test.(js|jsx|ts|tsx)",
  //   // "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  // ],

  // // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
export default config;
