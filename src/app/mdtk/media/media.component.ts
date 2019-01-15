import { Component, Input } from '@angular/core';

@Component({
    selector: 'mdtk-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss']
})
export class MediaComponent {
    @Input() contenido: Array<any>;
    tipoImagenes:Array<string> = ['image/jpeg','image/png','image/svg+xml'];
    tipoVideos:Array<string> = ['video/mp4'];
    tipoAudios:Array<string> = ['audio/mpeg'];
    tipos:Array<string> = this.tipoImagenes.concat(this.tipoVideos, this.tipoAudios);
    constructor(){}
    tipoMediaTag(tipo:string):string {
        var salida:string;
        if (this.tipoImagenes.find((e)=>{return e == tipo})){
            salida = 'img';
        } else if (this.tipoVideos.find((e)=>{return e == tipo})){
            salida = 'vid';
        } else if (this.tipoAudios.find((e)=>{return e == tipo})){
            salida = 'aud';
        }
        return salida;
    }
}
