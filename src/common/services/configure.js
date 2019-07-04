import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ConfigureApi{
  constructor(httpClient) {
    httpClient.configure(config => {
        config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:80/codeigniter_rest/rest')
            .withDefaults({
                headers: {
                    'Accept': 'application/json'
                }
            });
    });
    this.httpClient = httpClient;
}

}
