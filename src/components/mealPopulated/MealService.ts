import type { IMeal } from './mealType';

export const MealService = {
  baseURL: 'https://localhost:7031/api/GetMeal/All-Meals',

  async getMealsByTimetable(fields: Record<string, string>): Promise<IMeal[]> {
    const { day, time } = fields;
    const url = `${this.baseURL}/meals?day=${day}&time=${time}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  },
};
