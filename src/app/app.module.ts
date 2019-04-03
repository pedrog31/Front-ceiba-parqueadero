import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroVehiculosComponent } from './components/registro-vehiculos/registro-vehiculos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InformacionServicioModalComponent } from './components/informacion-servicio-modal/informacion-servicio-modal.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { ManejoErroresService } from './services/manejoErrores/manejo-errores.service';
import { VigilanteService } from './services/vigilante/vigilante.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistroVehiculosComponent,
    HeaderComponent,
    InformacionServicioModalComponent
  ],
  imports: [
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [
    VigilanteService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManejoErroresService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
