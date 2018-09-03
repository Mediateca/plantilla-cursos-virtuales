import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-m1',
    templateUrl: './m1.component.html',
    styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
    elementos: any;
    momentos: Array<string>;
    constructor(private appService: AppService) {

    }
    ngOnInit() {
        this.appService.getInterfaz().subscribe(data => {
            this.elementos = data;
            this.momentos = this.elementos.momentos;
        });
    }
}
