import {Todo} from './resources/Todo';

export class Ejemplo1 {
  message = 'Hello Kevin!';

  constructor(){
    this.todo = new Todo('Limpiar la casa');
    this.todoList = [];
    this.todoList.push(new Todo('Lavar los trastes'));
    this.todoList.push(new Todo('Sacar al perro'));
    this.todoList.push(new Todo('Lavar la ropa'));
    this.newItem = '';
  }

  agregarLista(){
    this.todoList.push(new Todo(this.newItem));
    this.newItem = '';
  }
  removeItem(todo){
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

}
