import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { TablaVehiculosComponent } from './componentes/tabla-vehiculos/tabla-vehiculos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
const routes: Routes = [
  {path: 'listado', component: TablaVehiculosComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: '', redirectTo: '/listado', pathMatch: 'full'},
  {path: '**', redirectTo: '/listado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
