import {inject} from 'aurelia-framework';
import moment from 'moment';
import {HttpClient} from 'aurelia-fetch-client';
 
@inject(HttpClient)
export class Ejemplo2{
    constructor(httpClient){
        this.httpClient = new HttpClient();
        //this.httpClient.get('/api/rest').then(data => {});
        this.descripcion = `Ejemplo 2! Es el año ${moment().format('YYYY')}`;
    }
}