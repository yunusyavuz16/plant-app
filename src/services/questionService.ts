import { Question } from '../types/question';

const API_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const questionService = {
  /**
   * Fetches all get started questions from the API
   * @returns Promise<Question[]>
   */
  getQuestions: async (): Promise<Question[]> => {
    try {
      const response = await fetch(`${API_URL}/getQuestions`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.sort((a: Question, b: Question) => a.order - b.order);
    } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
    }
  },
};