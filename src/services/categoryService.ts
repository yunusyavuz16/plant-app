import { CategoryResponse } from '../types/category';

const API_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const categoryService = {
  /**
   * Fetches all plant categories from the API
   * @returns Promise<CategoryResponse>
   */
  getCategories: async (): Promise<CategoryResponse> => {
    try {
      const response = await fetch(`${API_URL}/getCategories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: CategoryResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  },
};