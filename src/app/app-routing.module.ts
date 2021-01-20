import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'animation', component: OpenCloseComponent},
  {path: 'form', component:FormsComponent},
  {path: 'ejemplo', component:EjemploComponent},
  {path: '**', component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
