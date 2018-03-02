import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// rutas
import { FeatureRoutingModule } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HeadingComponent } from './components/heading/heading.component';
import { HomeComponent } from './components/home/home.component';

// servicios
import { UsuariosService } from './services/usuarios/usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    RegistroUsuarioComponent,
    HeadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FeatureRoutingModule,
    FormsModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
