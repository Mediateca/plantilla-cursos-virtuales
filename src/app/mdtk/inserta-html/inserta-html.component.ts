import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mdtk-inserta-html',
    templateUrl: './inserta-html.component.html',
    styles: []
})
export class InsertaHtmlComponent implements OnInit {
    @Input() bloques: Array<any>;
    constructor() { }
    ngOnInit() {}
}
