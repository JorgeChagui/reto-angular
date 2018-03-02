import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HeadingComponent } from './components/heading/heading.component';
import { FeatureRoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';

import {HttpClientModule} from '@angular/common/http';

import { SolicitudCreditoComponent } from './components/solicitud-credito/solicitud-credito.component';



@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    RegistroUsuarioComponent,
    HeadingComponent,
    HomeComponent,
    SolicitudCreditoComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
