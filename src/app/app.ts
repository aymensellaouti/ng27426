import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { TestForm } from "./formsExemples/test-form/test-form";
import { TestObservable } from "./rxjs/test-observable/test-observable";
import { TodoApi, TodoService } from './todo/service/todo.service';
import { JsonPipe } from '@angular/common';

// métadonnée un décorateur qui informe le compilateur
// que cette classe c'est un composant
@Component({
  // Le sélécteur css qui va identifier le composant
  selector: 'app-root',
  // J'importe les dépendances de mon template
  imports: [RouterOutlet, Navbar, TestForm, TestObservable, JsonPipe],
  // le lien vers le HTML que je gére
  templateUrl: './app.html',
  // Le css associé à ce composant
  styleUrl: './app.css'
})
export class App {
  todoService = inject(TodoService);
  todos =  signal<TodoApi[]>([]);
  constructor() {
    setInterval(() => {
      console.log('CD');
    }, 2000)
    this.todoService.getFakeTodos().subscribe({
      next:(todos) => {
        this.todos.set(todos);
      }
    })
  }
}
