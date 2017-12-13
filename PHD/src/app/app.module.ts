import { BrowserModule } from '@angular/platform-browser';


 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { OperacionListComponent } from './operacion-list/operacion-list.component';
import { HospitalizacionComponent } from './hospitalizacion/hospitalizacion.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    OperacionListComponent,
    HospitalizacionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
