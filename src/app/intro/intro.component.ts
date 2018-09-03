import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
    elementos: any;
    modulos: Array<string>;
    constructor(private appService: AppService) { }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.modulos = this.elementos.modulos;
        });
    }
}