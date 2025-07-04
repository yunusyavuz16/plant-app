export const API_CONFIG = {
  BASE_URL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
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