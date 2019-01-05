import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mdtk-titulo-heroico',
    templateUrl: './titulo-heroico.component.html',
    styleUrls: ['./titulo-heroico.component.css']
})
export class TituloHeroicoComponent implements OnInit {
    @Input() titulo: string;
    @Input() nombreCurso: string;
    constructor() { }
    ngOnInit() {}

}
