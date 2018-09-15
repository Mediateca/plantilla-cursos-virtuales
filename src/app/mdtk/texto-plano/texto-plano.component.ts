import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'mdtk-texto-plano',
    template: `<div class="texto-plano" [innerHTML]="contenido.texto | sanitizeHtml: 'html'"></div>`,
    styles: []
})
export class TextoPlanoComponent implements OnInit {
    @Input() contenido: any;
    @Input() tipo: string;
    constructor() { }
    ngOnInit() {}
}
