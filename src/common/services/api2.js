import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

@inject(HttpClient)
export class API2 {

    constructor() {
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
    }

    getData() {
        //return this.httpClient.fetch("/libro")
        httpClient.fetch("/libro/")
          .then(response => response.json())
          .then(jsonData =>  { console.log(jsonData)});
      }
    
    postData(url, data) {
        return this.httpClient.fetch(url, {
          method: 'post',
          body: json(data)
        });
    }

    getAll(url) {
        this.http.get(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    async getAsync() {
        const server = 'http://localhost:80/codeigniter_rest/rest/libro';

        return await fetch(server)
            .then(response => response.json())
            .then(jsonData => { return jsonData });
    }

}