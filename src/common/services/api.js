import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { ConfigureApi } from './configure';

@inject(HttpClient)
export class API extends ConfigureApi {

  constructor(httpClient) {
    super(httpClient);
  }

  async getAll() {
    return await this.httpClient.fetch("libro")
      .then(response => response.json())
      .then(jsonData => { return jsonData });
  }

  async create(datos) {
    const response = await this.httpClient.fetch('libro', {
        method: 'POST',
        body: json(datos)
    })
      .then(data => {
        console.log(data);
      }).catch(error => {
        alert('Error al guardar el registro! == '+error);
      });
  }

  // createAsync(datos){
  //   (async () => {
  //     const rawResponse = await fetch('http://localhost:80/codeigniter_rest/rest/libro/create', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(datos)
  //     });
  //     const content = await rawResponse.json();
    
  //     console.log(content);
  //   })();
  // }

  async update(datos) {
    const response = await this.httpClient.fetch('libro', {
      method: "PUT",
      body: json(datos)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  async delete(id) {
    const response = await this.httpClient.fetch('libro/' + id, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
      });
  }

}
