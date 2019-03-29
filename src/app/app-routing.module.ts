import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroVehiculosComponent } from './components/registro-vehiculos/registro-vehiculos.component';
import { InformacionServicioModalComponent } from './components/informacion-servicio-modal/informacion-servicio-modal.component';

const routes: Routes = [
  {path: '', component: RegistroVehiculosComponent},
  {path: '', component: InformacionServicioModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
