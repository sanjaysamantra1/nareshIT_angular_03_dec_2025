export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  sal: number;
}

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  sal: number;
  gender: string;
  email: string;
  constructor(id: number, firstName: string, lastName: string, sal: number, gender: string,email:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sal = sal;
    this.gender = gender;
    this.email = email;
  }
  getFullName(): string {
    return `FullName: ${this.firstName} ${this.firstName}`;
  }
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}
