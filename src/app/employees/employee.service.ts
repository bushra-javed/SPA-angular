import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'bushra',
      gender: 'female',
      email: 'bushra@getMaxListeners.com',
      dob: new Date('2/2/2018'),
      photoPath: 'assets/images/1.jpg'
    },

    {
      id: 2,
      name: 'hassan',
      gender: 'male',
      email: 'hassan@getMaxListeners.com',
      dob: new Date('2/2/2018'),

      photoPath: 'assets/images/2.jpg'
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
