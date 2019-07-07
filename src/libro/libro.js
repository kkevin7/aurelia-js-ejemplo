import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router'
import { API } from '../common/services/api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { LibroEntity } from './libroEntity';


@inject(Router, HttpClient, API, LibroEntity)
export class libro {
  message = "API de libros";
  listaLibros;

  constructor(router, http, api, LibroEntity) {
    this.router = router;
    this.httpClient = http;
    this.api = api;
    this.libroEntity = LibroEntity;
    this.btnCreate = true;
    this.btnEdit = false;
  }

  activate() {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.listaLibros = [];
    this.api.getAll()
      .then(datos => {
        datos.forEach(el => {
          this.listaLibros.push(new LibroEntity(el.id_Libro, el.titulo, el.autor, el.categoria, el.genero, el.estado));
        });
      }).catch(error => {
        console.log(error.message);
      });
    console.log(this.listaLibros);
  }

  agregarDatos() {
    console.log(this.libroEntity);
    this.api.create(this.libroEntity).then(respuesta => {
      this.mostrarDatos();
      this.limpiarForm();
    });
  }

  eliminarDatos(entity) {
    // console.log(this.listaLibros[0]);
    this.api.delete(entity.id_Libro).then(respuesta => {
      this.listaLibros.splice(this.listaLibros.indexOf(entity), 1)
    });
  }

  mostrarForm(entity){
    this.libroEntity = entity;
  }

  editarDatos(){
    this.btnCreate = false;
    this.btnEdit = true;
    console.log(this.libroEntity);
    this.api.update(this.libroEntity).then(respuesta => {
      this.listaLibros[this.listaLibros.indexOf(this.libroEntity)] = entity;
      limpiarForm();
    })
  }

  limpiarForm(){
    this.libroEntity = new LibroEntity();
    this.btnCreate = true;
    this.btnEdit = false;
  }

  

}
