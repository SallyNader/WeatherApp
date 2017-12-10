import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes}  from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
const appRoutes:Routes =[
  {path :"home" , component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
