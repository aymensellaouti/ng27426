import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  /**
   * elle retourne la liste des todos
   *
   * @returns signl<Todo[]>
   */
  getTodos(): Todo[] {
    return [];
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {

  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {

  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
  }
}
