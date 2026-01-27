import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_test();
    // this.behaviorSubject_test();
    // this.replaySubject_test();
    this.asyncSubject_test();
  }

  subject_test() {
    let mySubject = new Subject();
    mySubject.next('AAA');
    let subscriber1 = mySubject.subscribe(val => console.log('Subscriber-1:', val))
    mySubject.next('BBB');
    let subscriber2 = mySubject.subscribe(val => console.log('Subscriber-2:', val))
    mySubject.next('CCC');
    mySubject.next('DDD');
  }
  behaviorSubject_test() {
    let mySubject = new BehaviorSubject('Default Value');
    mySubject.next('AAA');
    let subscriber1 = mySubject.subscribe(val => console.log('Subscriber-1:', val))
    mySubject.next('BBB');
    let subscriber2 = mySubject.subscribe(val => console.log('Subscriber-2:', val))
    mySubject.next('CCC');
    mySubject.next('DDD');
  }
  replaySubject_test() {
    let mySubject = new ReplaySubject();
    mySubject.next('AAA');
    let subscriber1 = mySubject.subscribe(val => console.log('Subscriber-1:', val))
    mySubject.next('BBB');
    let subscriber2 = mySubject.subscribe(val => console.log('Subscriber-2:', val))
    mySubject.next('CCC');
    mySubject.next('DDD');
  }
  asyncSubject_test() {
    let mySubject = new AsyncSubject();
    mySubject.next('AAA');
    let subscriber1 = mySubject.subscribe(val => console.log('Subscriber-1:', val))
    mySubject.next('BBB');
    let subscriber2 = mySubject.subscribe(val => console.log('Subscriber-2:', val))
    mySubject.next('CCC');
    mySubject.next('DDD');
    // mySubject.complete();
  }
}
