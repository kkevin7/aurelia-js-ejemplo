import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router'
import { API } from '../common/services/api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { LibroEntity } from './libroEntity';

@inject(Router, HttpClient, API, LibroEntity)
export class libro {
  message = "API de libros";
  
  constructor(router, http, api, LibroEntity) {
    this.router = router;
    this.httpClient = http;
    this.api = api;
    this.libroEntity = LibroEntity;
    this.listaLibros = [];
    this.btnCreate = true;
    this.btnEdit = false;
  }

  activate() {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.api.getAll()
      .then(datos => {
        this.listaLibros = datos;
      }).catch(error => {
        console.log(error.message);
      });
  }

  agregarDatos() {
    console.log(this.libroEntity);
    this.api.create(this.libroEntity).then(respuesta => {
      this.mostrarDatos();
      this.limpiarForm();
    });
  }

  eliminarDatos(entity) {
    this.api.delete(entity.id_Libro).then(respuesta => {
      this.listaLibros.splice(this.listaLibros.indexOf(entity), 1)
    });
  }

  mostrarForm(entity){
    this.libroEntity = entity;
    this.btnCreate = false;
    this.btnEdit = true;
  }

  editarDatos(){
    this.api.update(this.libroEntity).then(respuesta => {
      //this.listaLibros[this.listaLibros.indexOf(this.libroEntity)] = this.libroEntity;
      this.mostrarDatos();
      this.limpiarForm();
    })
  }

  limpiarForm(){
    this.libroEntity = new LibroEntity();
    this.btnCreate = true;
    this.btnEdit = false;
  }

}
