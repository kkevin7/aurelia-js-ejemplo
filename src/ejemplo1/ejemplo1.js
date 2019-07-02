import {Todo} from './todo';

export class Ejemplo1 {
  message = 'Agrega al a la lista!';

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