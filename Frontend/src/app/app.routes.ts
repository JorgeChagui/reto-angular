import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
    { path: 'registro-usuario', component: RegistroUsuarioComponent },
    { path: '**', redirectTo: 'registro-usuario', pathMatch: 'full' }

];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
