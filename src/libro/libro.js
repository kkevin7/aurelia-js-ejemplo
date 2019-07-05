import { inject } from 'aurelia-framework';
import { API } from '../common/services/api';
import { HttpClient, json } from 'aurelia-fetch-client';
import { LibroEntity } from './libroEntity';


@inject(HttpClient, API, LibroEntity)
export class libro {
    message = "API de libros";
    id_Libro;
    titulo;
    autor;
    categoria;
    genero;
    estado;

    constructor() {
        this.httpClient = new HttpClient();
        this.api = new API(this.httpClient);
        this.listaLibros = [];
        this.mostrarDatos();
    }

    mostrarDatos() {
        this.api.getAll()
            .then(data => {
                this.datos = data;
            }).catch(error => {
                this.error = error.message;
            });
    }

    agregarDatos() {
        this.listaLibros = new LibroEntity( this.titulo, this.autor, this.categoria, this.genero, this.estado);
        console.log(this.listaLibros);
        this.api.createAsync(this.listaLibros);
    }

    deleteDatos(){
        this.api.delete(28)
    }

}
