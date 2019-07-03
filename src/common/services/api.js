import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class API {

    constructor(http) {
        http.configure(config => {
            config
                .withBaseUrl('http://localhost/codeigniter_rest/rest/libro');
        });

        this.http = http;
    }

    getAll() {
        this.http.fetch('something', {
            headers: {
                /*'Content-Type': 'application/x-www-form-urlencoded',*/
                'Content-Type': 'application/json'
                // Mas opciones
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

}