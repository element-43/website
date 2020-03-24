module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/fileMock.js',
    '\\.(css)$': '<rootDir>/test/mocks/stylesMock.js',
  },
  rootDir: '..',
  roots: ['<rootDir>/src/'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    userAgent: 'node.js',
    appName: 'Netscape',
    language: 'en',
  },
  testMatch: ['<rootDir>/src/**/?(*.)(test).(j|t)s?(x)'],
  testResultsProcessor: 'jest-junit',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  verbose: true,
};
