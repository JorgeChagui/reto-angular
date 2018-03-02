import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudCreditoComponent } from './components/solicitud-credito/solicitud-credito.component';

const routes: Routes = [
    { path: 'solicitud-credito', component: SolicitudCreditoComponent },
    { path: 'registro-usuario', component: RegistroUsuarioComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
