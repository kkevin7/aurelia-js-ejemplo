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
    return await this.httpClient.fetch("libro/findAll")
      .then(response => response.json())
      .then(jsonData => { return jsonData });
  }

  create(datos) {
    console.log(json(datos));
    this.httpClient = new HttpClient();
    this.httpClient.fetch('libro/create', {
        method: 'post',
        body: json(datos)
    })
      .then(data => {
        console.log(data);
      }).catch(error => {
        alert('Error al guardar el registro! == '+error);
      });
  }

  createAsync(datos){
    (async () => {
      const rawResponse = await fetch('http://localhost:80/codeigniter_rest/rest/libro/create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
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
    this.httpClient.fetch('libro/delete/' + id, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

}
