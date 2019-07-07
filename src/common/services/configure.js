import { inject } from 'aurelia-framework';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(HttpClient)
export class ConfigureApi {

  constructor(httpClient) {
    httpClient.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:80/ci_rest_lib/')
        .withDefaults({
          headers: {
            'Accept': 'application/json',
          }
        })
    });
    this.httpClient = httpClient;
  }

}
