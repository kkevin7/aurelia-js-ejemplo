import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';
import { ConfigureApi } from './configure';

/*Inyectarenos el recurso a utilizar */
@inject(HttpClient)
/*heredaremos la configuracion de nuestro cliente htttp*/
export class API extends ConfigureApi {

  constructor(httpClient) {
    /* Inicialiceremos la configuración */
    super(httpClient);
  }

  /* Haremos petición asincrino para solicitar todos los registros de la tabla */
  async getAll() {
    return await this.httpClient.fetch("libro")
      .then(response => response.json())
      .then(jsonData => { return jsonData });
  }

  /* Realizará una peticion asincrona de una busqueba en base al ID dentro de una tabla */
  async getById(id) {
    return await this.httpClient.fetch("libro/findById/"+id)
      .then(response => response.json())
      .then(jsonData => { return jsonData });
  }

  /* Realizaremos una petición la cual nos creara un registro */
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

  /*Realizaramos una peticion asincrona para actualizar un registro de la tabla */
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

  /* Realizaremos una petición asincrona para eliminar un registro */
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
