import {inject} from 'aurelia-framework';
import {Tarea} from './tarea';

@inject(Tarea)
export class Ejemplo1 {
  message = 'Lista de Tareas!';

  constructor(tarea){
    this.tarea = tarea;
    this.tareaList = [];
    this.tareaList.push(new Tarea('Lavar los trastes'));
    this.tareaList.push(new Tarea('Sacar al perro'));
    this.tareaList.push(new Tarea('Lavar la ropa'));
    this.newItem = '';
  }

  agregarLista(){
    this.tareaList.push(new Tarea(this.newItem));
    this.newItem = '';
  }
  removeItem(tarea){
    this.tareaList.splice(this.tareaList.indexOf(tarea), 1);
  }

}
