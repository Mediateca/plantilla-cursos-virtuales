import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { IntroComponent } from './intro/intro.component';
import { M1Component } from './m1/m1.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { MdtkModule } from './mdtk/mdtk.module';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        M1Component,
        SanitizeHtmlPipe
    ],
    imports: [
        BrowserModule,
        ClarityModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MdtkModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
