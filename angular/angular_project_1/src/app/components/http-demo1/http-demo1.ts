import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  user_api = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.fetchData_javascript();
    this.fetchData_angular();
  }

  fetchData_javascript() { // fetch() returns a promise
    fetch(this.user_api).then(response => {
      response.json().then(finalResponse => {
        console.log(finalResponse)
      });
    }).catch(err => {
      console.log(err)
    });
  }

  fetchData_angular() { // httpClient.get() returns observable
    this.httpClient.get(this.user_api).subscribe(
      response => { console.log(response) },
      error => { console.log(error) }
    );
  }

}
