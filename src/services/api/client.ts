import { API_CONFIG } from '../../constants/api';

interface ApiError extends Error {
  status?: number;
  data?: any;
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error: ApiError = new Error(`HTTP error! status: ${response.status}`);
    error.status = response.status;
    try {
      error.data = await response.json();
    } catch {
      error.data = await response.text();
    }
    throw error;
  }

  return response.json();
};

const createRequest = async <T>(
  endpoint: string,
  options: RequestInit
): Promise<T> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return handleResponse<T>(response);
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timeout after ${API_CONFIG.TIMEOUT}ms`);
    }
    console.error(`API Request Error:`, error);
    throw error;
  }
};

export const apiClient = {
  get: <T>(endpoint: string) =>
    createRequest<T>(endpoint, { method: 'GET' }),

  post: <T>(endpoint: string, data: any) =>
    createRequest<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data: any) =>
    createRequest<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string) =>
    createRequest<T>(endpoint, { method: 'DELETE' }),

  patch: <T>(endpoint: string, data: any) =>
    createRequest<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};