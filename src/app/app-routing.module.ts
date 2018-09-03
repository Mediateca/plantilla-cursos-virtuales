import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { M1Component } from './m1/m1.component';

const routes: Routes = [
    {path: '', component: IntroComponent},
    {path: 'm1', component: M1Component}
];
@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}