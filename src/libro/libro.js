import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router'
import { API } from '../common/services/api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { LibroEntity } from './libroEntity';

/* Inyectaremos los recursos que vamos a utilizar */
@inject(Router, HttpClient, API, LibroEntity)
export class libro {
  /*Titulo de la vista */
  message = "API de libros";
  
  /*Inicializaremos los componente de la visya */
  constructor(router, http, api, LibroEntity) {
    this.router = router;
    this.httpClient = http;
    this.api = api;
    this.libroEntity = LibroEntity;
    this.listaLibros = [];
    this.btnCreate = true;
    this.btnEdit = false;
  }

  /* Una vez que se encuentre cargada nuestra vista mostrará los registros */
  activate() {
    this.mostrarDatos();
  }

  /*Metodo encargado de utilizar los método que hará una peticion para obtener los datos y guardarlos una variable para ser bindeados */
  mostrarDatos() {
    this.api.getAll()
      .then(datos => {
        this.listaLibros = datos;
      }).catch(error => {
        console.log(error.message);
      });
  }

  /*Metodo que obtendrá los metodos de nuestro formulario y utilizará el metodo para insertar el registro */
  agregarDatos() {
    console.log(this.libroEntity);
    this.api.create(this.libroEntity).then(respuesta => {
      this.mostrarDatos();
      this.limpiarForm();
    });
  }

  /*Metodo encargado de obtener el registro y utilizar el metodo que hará una petición de eliminación */
  eliminarDatos(entity) {
    this.api.delete(entity.id_Libro).then(respuesta => {
      this.listaLibros.splice(this.listaLibros.indexOf(entity), 1)
    });
  }

  /*Mostrar los datos en formulario para realizar la edición de los mismos */
  mostrarForm(entity){
    this.buscarRegistro(entity.id_Libro);
    this.btnCreate = false;
    this.btnEdit = true;
  }

  /* Buscaremos el registro que queremos editar */
  buscarRegistro(id){
    this.api.getById(id)
    .then(datos => {
      this.libroEntity = datos;
    });
  }

  /*Metodo que se encargar de obtener el registro y realizar una petición de edición */
  editarDatos(){
    this.api.update(this.libroEntity).then(respuesta => {
      //this.listaLibros[this.listaLibros.indexOf(this.libroEntity)] = this.libroEntity;
      this.mostrarDatos();
      this.limpiarForm();
    })
  }

  /*Metodo que se encaragra de limpiar las variables del formulario */
  limpiarForm(){
    this.libroEntity = new LibroEntity();
    this.btnCreate = true;
    this.btnEdit = false;
  }
}
