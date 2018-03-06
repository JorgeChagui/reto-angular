import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TextMaskModule} from '../../node_modules/angular2-text-mask';
import { CurrencyMaskModule } from "ng2-currency-mask";

// rutas
import { FeatureRoutingModule } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HeadingComponent } from './components/heading/heading.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudCreditoComponent } from './components/solicitud-credito/solicitud-credito.component';

// servicios
import { UsuariosService } from './services/usuarios/usuarios.service';
import { SolicitudService } from './services/Solicitud/solicitud.service';


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
    HttpClientModule,
    FeatureRoutingModule,
    FormsModule,
    TextMaskModule,
    CurrencyMaskModule
  ],
  providers: [UsuariosService,
    SolicitudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
