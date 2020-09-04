import { ModalRiscoPageModule } from './modal-risco/modal-risco.module';
import { ModalRiscoPageRoutingModule } from './modal-risco/modal-risco-routing.module';
import { ModalSintomasPageRoutingModule } from './modal-sintomas/modal-sintomas-routing.module';
import { ModalSintomasPage } from './modal-sintomas/modal-sintomas.page';
import { HomePageRoutingModule } from './home/home-routing.module';
import { HomePageModule } from './home/home.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    BrowserAnimationsModule,

    IonicModule.forRoot(), 
    AppRoutingModule,
    HomePageModule,
    HomePageRoutingModule,
    ModalSintomasPage,
    ModalSintomasPageRoutingModule,
    ModalRiscoPageRoutingModule,
    ModalRiscoPageModule,
    IonicModule.forRoot(),
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
