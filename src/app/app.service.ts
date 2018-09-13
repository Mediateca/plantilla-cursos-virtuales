import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }
    getInterfaz() {
        return this.http.get('./assets/contenido.json');
    }
    /*getContenido(nombre:String) {
        return this.http.get<any>('./assets/'+nombre+'.html', {responseType: 'text'});
    }*/
}
