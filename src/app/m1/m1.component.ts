import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-m1',
    templateUrl: './m1.component.html',
    styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
    numModulo: number;
    elementos: any;
    modulos: Array<any> = [];
    momentoActual: number;
    numSeccion: number;
    constructor(private appService: AppService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.numModulo = 1;
            this.momentoActual = 0;
            this.numSeccion = 0;
            if (params['modulo']) {
                this.numModulo = Number(params['modulo']);
            }
            if (params['mom']) {
                this.momentoActual = Number(params['mom']);
            }
            if (params['sec']) {
                this.numSeccion = Number(params['sec']);
            }
        });
    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
            console.log(this.modulos[this.numModulo]);
        });
    }
}
