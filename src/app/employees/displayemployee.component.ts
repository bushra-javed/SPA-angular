import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.scss']
})
export class DisplayemployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor() {}

  ngOnInit() {}
}
