import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    elementos: any;
    modulos: Array<string>;
    branding: Object;
    numModulo: Number;
    componente: String;
    constructor(private appService: AppService,
                 private route: ActivatedRoute,
                 private ruta: Router) {
        this.route.queryParams.subscribe(params => {
            this.numModulo = 0;
            if (params['modulo']) {
                this.numModulo = params['modulo'];
            }
        });
        this.ruta.events.subscribe(ev => {
            this.componente = this.ruta.url.split('?')[0];
        });
    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
            this.branding = this.elementos.branding;
        });
    }
}
