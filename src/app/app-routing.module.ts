import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroVehiculosComponent } from './components/registro-vehiculos/registro-vehiculos.component';

const routes: Routes = [
  {path: '', component: RegistroVehiculosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
