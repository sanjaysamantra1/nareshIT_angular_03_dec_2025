
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  num: number = 4;
  flag: boolean = true;
  country_list: string[] = ["India", "Afghanistan", "Algeria", "Andorra", "Angola", "Anguilla", "Srilanka", 'USA']
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
  tasks = [
    {
      id: 1,
      title: "Review project proposal",
      completed: false,
      priority: "High"
    },
    {
      id: 2,
      title: "Schedule team meeting",
      completed: true,
      priority: "Medium"
    },
    {
      id: 3,
      title: "Update task list in the documentation",
      completed: false,
      priority: "Low"
    }
  ];
  filterTasks() {
  }

  myStyle1 = {
    color: 'red',
    border: '5px dotted green'
  }
  myStyle2 = {
    color: 'blue',
    border: '5px dashed yellow'
  }
  myFunction() {
    return this.num % 2 === 0 ? this.myStyle1 : this.myStyle2;
  }
}
