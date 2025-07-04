import { Question } from '../types/question';
import { API_ENDPOINTS } from '../constants/api';
import { apiClient } from './api/client';

export const questionService = {
  /**
   * Fetches all get started questions from the API
   * @returns Promise<Question[]>
   */
  getQuestions: async (): Promise<Question[]> => {
    const data = await apiClient.get<Question[]>(API_ENDPOINTS.questions.getAll);
    return data.sort((a: Question, b: Question) => a.order - b.order);
  },
};