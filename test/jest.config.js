module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/typescript/tsconfig.test.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/test/__mocks__/stylesMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
  },
  rootDir: '..',
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  testMatch: ['<rootDir>/src/**/?(*.)(test).ts?(x)'],
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  verbose: true,
};
