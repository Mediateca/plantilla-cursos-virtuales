import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineaTiempoComponent } from './linea-tiempo/linea-tiempo.component';

@NgModule({
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [LineaTiempoComponent],
    exports: [LineaTiempoComponent]
})
export class MdtkModule { }