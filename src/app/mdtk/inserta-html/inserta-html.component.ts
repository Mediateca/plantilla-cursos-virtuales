import { Component, Input } from '@angular/core';

@Component({
    selector: 'mdtk-inserta-html',
    templateUrl: './inserta-html.component.html',
    styles: []
})
export class InsertaHtmlComponent {
    @Input() bloques: Array<any>;
    @Input() saltoCol: Array<boolean>;
    constructor() {}
}
