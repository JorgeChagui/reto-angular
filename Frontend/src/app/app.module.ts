import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HeadingComponent } from './components/heading/heading.component';
import { FeatureRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    RegistroUsuarioComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
