import Constants from 'expo-constants';

const ENV = Constants.expoConfig?.extra || {};

export const API_CONFIG = {
  BASE_URL: ENV.API_URL,
  TIMEOUT: 10000, // 10 seconds
} as const;

export const API_ENDPOINTS = {
  categories: {
    getAll: '/getCategories',
  },
  questions: {
    getAll: '/getQuestions',
  },
} as const;

// Type for all available endpoints
export type ApiEndpoint = typeof API_ENDPOINTS;