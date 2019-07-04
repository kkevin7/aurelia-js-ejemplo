import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import { ConfigureApi } from './configure';

let httpClient = new HttpClient();

@inject(HttpClient)
@inject(ConfigureApi)
export class API extends ConfigureApi{

    constructor() {
      super(httpClient);
    }

    async getAll() {
        return await this.httpClient.fetch("/libro/")
          .then(response => response.json())
          .then(jsonData =>  { return jsonData});
      }
    
    postData(url, data) {
        return this.httpClient.fetch(url, {
          method: 'post',
          body: json(data)
        });
    }

    async getAsync() {
        const server = 'http://localhost:80/codeigniter_rest/rest/libro';

        return await fetch(server)
            .then(response => response.json())
            .then(jsonData => { return jsonData });
    }

}
