import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { Employee, IEmployee } from '../../models/employee_model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  // employees$: Observable<IEmployee[]> | undefined;
  employees$: Observable<Employee[]> | undefined;

  constructor(private employeeService: EmployeeService) {
  }
  ngOnInit() {
    // this.employees$ = this.employeeService.getAllEmployees();
    this.employees$ = this.employeeService.getEmployees();
  }
  displayEmp(emp:any){
    console.log(emp)
  }
}
