/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux|@reduxjs/toolkit))'
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__/',
    '/mocks/',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};