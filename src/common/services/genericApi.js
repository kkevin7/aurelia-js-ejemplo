
import { inject } from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class GenericApi{

    async get() {
        const server = 'http://localhost/codeigniter_rest/rest/libro';

        return await fetch(server)
            .then(response => response.json())
            .then(jsonData => { return jsonData });
    }

}