import {inject} from 'aurelia-framework';
import moment from 'moment';
import {HttpClient} from 'aurelia-fetch-client';
 
@inject(HttpClient)
export class Ejemplo2{
    constructor(httpClient){
        this.httpClient = new HttpClient();
        this.httpClient.get('http://localhost:80/codeigniter_rest/rest/libro/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        this.descripcion = `Ejemplo 2! Es el año ${moment().format('YYYY')}`;
    }
}