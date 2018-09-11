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
    numMomentos: Number;
    momentoActual: Number;
    intro: Number = 0;
    html: any;
    constructor(private appService: AppService,
                 private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.momentoActual = 0;
            if (params['mom']) {
                this.momentoActual = params['mom'];
            }
        });
    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
            this.numMomentos = this.modulos[0].momentos.length;
            /*
            this.appService.getContenido('bienvenida').subscribe(html => {
                this.html = html;
            });
            */
        });
    });
}
