import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mdtk-inserta-html]'
})
export class InsertaHTMLDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
