import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
const routes: Routes = [ {
    path: '', component: IntroComponent
} ];
@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}