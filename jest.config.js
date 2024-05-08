/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Ignore compiled JS files in 'dist' directory
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};