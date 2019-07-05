import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { ConfigureApi } from './configure';

@inject(HttpClient)
@inject(ConfigureApi)
export class API extends ConfigureApi {

  constructor(httpClient) {
    super(httpClient);
  }

  async getAll() {
    return await this.httpClient.fetch("libro/")
      .then(response => response.json())
      .then(jsonData => { return jsonData });
  }

  create(datos) {
    this.httpClient.fetch('libro/create', {
      method: "POST",
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  update(datos) {
    this.httpClient.fetch('libro/update', {
      method: "PUT",
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  delete(id) {
    this.httpClient.fetch('libro/delete/'+id, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

}
