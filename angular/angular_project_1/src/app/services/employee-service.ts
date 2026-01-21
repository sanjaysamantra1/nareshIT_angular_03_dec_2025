import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee_model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private emp_url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {
  }
  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.emp_url)
  }

}
