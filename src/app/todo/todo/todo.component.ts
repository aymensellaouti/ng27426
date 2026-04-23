import { Component, inject, signal } from "@angular/core";
import { TodoApi, TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";
import { CvPage } from "../../cv/cv-page/cv-page";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
  // Je veux une instance de todoservice pour mon instance de TodoComponent
  providers: [TodoService]
})
export class TodoComponent {
  todoService = inject(TodoService);
  // State
  todos = this.todoService.getTodos();
  todo = signal(new Todo());
  todosResource = this.todoService.getTodosResources();
  constructor() {
    // this.todoService.getFakeTodos().subscribe({
    //   next: (todosapi) => this.todosApi.set(todosapi),
    //   error: (e) => alert('y a un problème')
    // });
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
