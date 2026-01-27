import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todoArr: any = [];
  todoService = inject(TodoService);

  ngOnInit() {
    this.todoService.todoObs.subscribe(todos => {
      this.todoArr = todos;
    });
  }

  deleteMyTodo(id: any) {
    this.todoService.deleteToDo(id);
  }
}
