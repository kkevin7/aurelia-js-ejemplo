import {inject} from 'aurelia-framework';
import {API2} from '../common/services/api2';

@inject(API2)
export class libro{

    constructor(){
        var api = new API2();
        api.getData();
    }
}