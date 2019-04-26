import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  department: Department[] = [
    {
      id: 1,
      name: 'HR'
    },
    { id: 2, name: 'Computer' }
  ];
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    dob: null,
    photoPath: null
  };
  constructor(
    private _employeeService: EmployeeService,
    // tslint:disable-next-line:variable-name
    private _router: Router
  ) {}

  ngOnInit() {}

  // saveemployee(newEmployee: Employee): void {
  //   console.log(newEmployee);
  // }

  saveEmployee(): void {
    console.log(this.employee);

    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
