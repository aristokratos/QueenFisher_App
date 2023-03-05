import React from 'react';
import { IUser } from './UserTypes';

export class UserService {
  private static users: IUser[] = [
    { Name: 'John', Number: +2348174648484, Email: 'john@gmail.com' },
    { Name: 'Peter', Number: +2349098765678, Email: 'peter@gmail.com' },
    { Name: 'Paul', Number: +2348087654390, Email: 'paul@gmail.com' },
  ];

  public static getAllUsers() {
    return this.users;
  }
}

export default UserService;
