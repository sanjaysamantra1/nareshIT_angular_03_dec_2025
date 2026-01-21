import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee_model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees$: Observable<IEmployee[]> | undefined;

  constructor(private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.employees$ = this.employeeService.getAllEmployees();
  }
}
