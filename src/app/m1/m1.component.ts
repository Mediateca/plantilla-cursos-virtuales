import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-m1',
    templateUrl: './m1.component.html',
    styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
    numModulo: Number;
    elementos: any;
    modulos: Array<any> = [];
    momentoActual: Number;
    numSeccion: Number;
    constructor(private appService: AppService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.numModulo = 1;
            this.momentoActual = 0;
            this.numSeccion = 0;
            if (params['modulo']) {
                this.numModulo = params['modulo'];
            }
            if (params['mom']) {
                this.momentoActual = params['mom'];
            }
            if (params['sec']) {
                this.numSeccion = params['sec'];
            }
        });
    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
        });
    }
}