import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VigilanteService } from 'src/app/services/vigilante/vigilante.service';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';
import {MatDialog} from '@angular/material';
import { InformacionServicioModalComponent } from '../informacion-servicio-modal/informacion-servicio-modal.component';
import { TasaRepresentativaMercado } from 'src/app/modelo/TasaRepresentativaMercado';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.scss']
})
export class RegistroVehiculosComponent implements OnInit {
  formConsulta: FormGroup;
  cargando: boolean;
  columnasGrid: number;
  serviciosActivos: ServicioParqueo[];
  tasaRepresentativaMercado: TasaRepresentativaMercado;

  constructor(
    private fb: FormBuilder,
    private vigilanteService: VigilanteService,
    private dialogService: MatDialog) {
    this.crearForm();
  }

  ngOnInit() {
    this.consultarEstadoParqueadero();
    this.consultarTasaRepresentativaMercado();
  }

  consultarEstadoParqueadero() {
    this.cargando = true;
    this.vigilanteService.consultarEstado().subscribe(listaServicios => {
      this.serviciosActivos = listaServicios;
      this.cargando = false;
    });
  }

  consultarTasaRepresentativaMercado() {
    this.cargando = true;
    this.vigilanteService.consultarTasa().subscribe(tasaRepresentativaMercado => {
      this.tasaRepresentativaMercado = tasaRepresentativaMercado;
      this.cargando = false;
    });
  }

  consultar() {
    const placa = this.formConsulta.get('placa').value;
    this.formConsulta.get('placa').setValue('');
    this.cargando = true;
    this.vigilanteService.consultarServicio (placa).subscribe( servicioParqueo => {
      this.cargando = false;
      this.mostrarInformacionServicio(servicioParqueo);
    });
  }
  mostrarInformacionServicio(servicioParqueo: ServicioParqueo) {
    const dialogRef = this.dialogService.open(InformacionServicioModalComponent, {
      maxWidth: '100vw',
      minWidth: '400px',
      data: servicioParqueo
    });
    dialogRef.afterClosed().subscribe(() => {
      this.consultarEstadoParqueadero();
    });
  }

  crearForm() {
    this.formConsulta = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern('[A-Za-z0-9ñÑ]+')]]
    });
  }

  get estaBotonDesabilitado(): boolean {
    return  this.cargando || !this.formConsulta.get('placa').valid;
  }

  get numeroCarros(): number {
    let numero = 0;
    this.serviciosActivos.forEach(servicio => {
      if (servicio.vehiculo.tipo === 'Carro') {
        numero++;
      }
    });
    return numero;
  }

  get numeroMotos(): number {
    let numero = 0;
    this.serviciosActivos.forEach(servicio => {
      if (servicio.vehiculo.tipo === 'Moto') {
        numero++;
      }
    });
    return numero;
  }

}
