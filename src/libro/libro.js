import {inject} from 'aurelia-framework';
import {API} from '../common/services/api';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient, API)
export class libro{
    message = "API de libros";

    constructor(){
      this.httpClient = new HttpClient();
      this.api = new API(this.httpClient);
      this.mostrarDatos();
    }

    mostrarDatos(){
      this.api.getAll()
         .then(data => {
            this.datos = data;
         }).catch(error => {
             this.error = error.message;
         });
    }

}
