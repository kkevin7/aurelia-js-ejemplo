import {inject} from 'aurelia-framework';
import {API} from '../common/services/api';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

@inject(API)
export class libro{

    constructor(){
        var api = new API(httpClient);
        console.log(api.getAll());
    }
}
