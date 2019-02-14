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
    saltoCol: Array<boolean> = [];
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
            var saltoColumna = this.saltoCol;
            window.setTimeout(function() {
                var altoContenido: number = 0;
                var sumaAlto: number = 0;
                var salCol: boolean = false;
                var numCol:number = 0;
                const inserta = document.getElementsByTagName('mdtk-inserta-html')[0];
                for (let i = 0;i < inserta.children.length; i++) {
                    altoContenido += inserta.children[i].scrollHeight;
                }
                for (let i = 0;i < inserta.children.length; i++) {
                    sumaAlto += inserta.children[i].scrollHeight;
                    if (numCol == 0 && sumaAlto > (altoContenido / 2)) {
                        salCol = true;
                        numCol = 1;
                    } else {
                        salCol = false;
                    }
                    saltoColumna.push(salCol);
                    console.log(saltoColumna);
                }
            },500);
        });
    }
}
