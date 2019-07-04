import {inject} from 'aurelia-framework';
import {API} from '../common/services/api';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();
var api = new API(httpClient);

@inject(HttpClient, API)
export class libro{
    message = "API de libros";

    constructor(){
         api.getAll()
         .then(data => {
            this.arreglo = data;
         }).catch(error => {
             this.error = error.message;
         });
    }

}
