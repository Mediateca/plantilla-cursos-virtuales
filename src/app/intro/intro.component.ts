import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
    elementos: any;
    modulos: Array<any> = [];
    numMomentos: number;
    momentoActual: number = 0;
    seccionActual: number = 0;
    momentos: Array<any>;
    intro: number = 0;
    constructor(private appService: AppService,
                 private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.momentoActual = 0;
            if (params['mom']) {
                this.momentoActual = params['mom'];
                this.seccionActual = params['sec'];
            }
        });
    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
            this.numMomentos = this.modulos[0].momentos.length;
            this.momentos = this.modulos[0].momentos;
            console.log(this.modulos[this.intro].momentos[this.momentoActual].secciones[this.seccionActual].componentes);
        });
    }
}
