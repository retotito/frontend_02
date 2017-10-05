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
    console.log("yotodo");
    const todo = {
      title: "meintitel"
    }
    this.todoService.createTodo(todo);
  }

  ngOnInit() {
  }

}
