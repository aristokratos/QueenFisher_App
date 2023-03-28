import { type Key, type ReactNode } from 'react';

export interface IMeal {
  id: Key | null | undefined;
  country: ReactNode;
  type: ReactNode;
  name: ReactNode;
  MealName: string;
  MealType: string;
  Country: string;
}
