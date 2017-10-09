import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  addTodo() {
    const todo = {
      "title":"myTitle25",
      "description":"this is my description",
      "rating":5
    }
    this.todoService.createTodo(todo)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );

      //reset my todo form
  }

  ngOnInit() {
    this.todoService.getTodos()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  

}
