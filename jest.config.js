module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
