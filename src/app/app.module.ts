import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';
import { Page404Component } from './page404/page404.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AnimationComponent,
    Page404Component,
    HomeComponent,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
