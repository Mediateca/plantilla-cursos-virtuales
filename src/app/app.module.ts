import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { M1Component } from './m1/m1.component';
import { AppService } from './app.service';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { InsertaHtmlComponent } from './mdtk/inserta-html/inserta-html.component';
import { TextoPlanoComponent } from './mdtk/texto-plano/texto-plano.component';
import { DestacadoComponent } from './mdtk/destacado/destacado.component';
import { TituloHeroicoComponent } from './mdtk/titulo-heroico/titulo-heroico.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        M1Component,
        SanitizeHtmlPipe,
        InsertaHtmlComponent,
        DestacadoComponent,
        TextoPlanoComponent,
        TituloHeroicoComponent
    ],
    imports: [
        BrowserModule,
        ClarityModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent],
    exports: [InsertaHtmlComponent, DestacadoComponent, TextoPlanoComponent, TituloHeroicoComponent]
})
export class AppModule { }
