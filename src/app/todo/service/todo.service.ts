import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerSeervice } from "../../services/logger.Service";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  logger = inject(LoggerSeervice);
  /**
   * elle retourne la liste des todos
   *
   * @returns signl<Todo[]>
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns void
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update(todos => todos.filter(actualTodo => actualTodo != todo ))
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.logger.log(this.#todos());
  }
}
