import React from 'react';
import { IMeal } from './mealType';

export class MealService {
  private static users: IMeal[] = [
    { MealName: 'Rice', MealType: 'Igbo', Country: 'Nigeria' },
    { MealName: 'Beans', MealType: 'Tushar', Country: 'Nigeria' },
    { MealName: 'Yam', MealType: 'noname', Country: 'Nigeria' },
  ];

  public static getAllUsers() {
    return this.users;
  }
}

export default MealService;
