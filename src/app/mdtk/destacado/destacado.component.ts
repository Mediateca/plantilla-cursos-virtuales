import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mdtk-destacado',
    templateUrl: './destacado.component.html',
    styleUrls: ['./destacado.component.css']
})
export class DestacadoComponent implements OnInit {
    @Input() contenido: any;
    @Input() tipo: string;
    constructor() { }
    ngOnInit() {}
}
