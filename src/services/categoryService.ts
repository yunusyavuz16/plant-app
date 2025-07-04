import { CategoryResponse } from '../types/category';
import { API_ENDPOINTS } from '../constants/api';
import { apiClient } from './api/client';

export const categoryService = {
  /**
   * Fetches all plant categories from the API
   * @returns Promise<CategoryResponse>
   */
  getCategories: async (): Promise<CategoryResponse> => {
    return apiClient.get<CategoryResponse>(API_ENDPOINTS.categories.getAll);
  },
};