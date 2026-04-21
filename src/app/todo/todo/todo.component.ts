import { Component, inject, signal } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule]
})
export class TodoComponent {
  todoService = inject(TodoService);
  // State
  todos = this.todoService.getTodos();
  todo = signal(new Todo());

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
