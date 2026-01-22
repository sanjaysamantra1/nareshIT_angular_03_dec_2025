import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee, IEmployee } from '../models/employee_model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private emp_url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {
  }
  getAllEmployees(): Observable<IEmployee[]> {
    // fetch data from API & return as it is (JS objects)
    return this.http.get<IEmployee[]>(this.emp_url)
  }

  getEmployees(): Observable<Employee[]> {
    // fetch data from API(JS objects), convert them to Employee Obje and return to component
    return this.http.get<Employee[]>(this.emp_url).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map(response => {
          let { id, firstName, lastName, sal, gender, email } = response;
          let empObj = new Employee(id, firstName, lastName, sal, gender, email);
          return empObj;
        })
      })
    );
  }

}
