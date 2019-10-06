import { Component, OnInit } from '@angular/core';

import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Array<any>;

  constructor(private apiService: APIService) { }

  async ngOnInit() {
    this.apiService.OnCreateTodoListener.subscribe((evt) => {
      const data = (evt as any).value.data.OnCreateTodo;
      this.todos = [...this.todos, data];
    });

    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });

  }

  createTodo() {
    this.apiService.CreateTodo({
      name: 'Angular',
      description: 'testing'
    });
  }
}
