import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatSnackBar, MatDialogRef} from '@angular/material';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';
import { TIPOS_VEHICULO } from 'src/constantes';
import { VigilanteService } from 'src/app/services/vigilante/vigilante.service';

@Component({
  selector: 'app-informacion-servicio-modal',
  templateUrl: './informacion-servicio-modal.component.html',
  styleUrls: ['./informacion-servicio-modal.component.scss']
})
export class InformacionServicioModalComponent implements OnInit {

  cargando: boolean;
  columnasGrid: number;

  constructor(
    private vigilanteService: VigilanteService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public servicioParqueo: ServicioParqueo,
    private dialogRef: MatDialogRef<InformacionServicioModalComponent>) {
  }

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  registrarIngreso() {
    this.cambiarCargando();
    this.vigilanteService.registrarIngresoVehiculo(this.servicioParqueo.vehiculo)
    .subscribe(respuesta => {
      if (respuesta.ok) {
        const mensaje = `${this.servicioParqueo.vehiculo.tipo} con placa ${this.servicioParqueo.vehiculo.placa} ingresado correctamente`;
        this.snackBar.open(mensaje, null, {
          duration: 2000,
        });
        this.dialogRef.close();
        this.cambiarCargando();
      }
    }, error => {
      const mensaje = `Error con ingreso de ${this.servicioParqueo.vehiculo.tipo}
       con placa ${this.servicioParqueo.vehiculo.placa}, ${error.error}`;
      this.snackBar.open(mensaje, null, {
        duration: 5000,
      });
      console.error(error);
      this.dialogRef.close();
      this.cambiarCargando();
    });
  }
  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  registrarPago() {
    this.vigilanteService.registrarPagoVehiculo(true, this.servicioParqueo.vehiculo.placa)
    .subscribe(respuesta => {
      if (respuesta.ok) {
        const mensaje = `${this.servicioParqueo.vehiculo.tipo} con placa ${this.servicioParqueo.vehiculo.placa} pago exitoso`;
        this.snackBar.open(mensaje, null, {
          duration: 2000,
        });
        this.dialogRef.close();
        this.cambiarCargando();
      }
    }, error => {
      const mensaje = `Error con pago de ${this.servicioParqueo.vehiculo.tipo}
       con placa ${this.servicioParqueo.vehiculo.placa}, ${error.error}`;
      this.snackBar.open(mensaje, null, {
        duration: 5000,
      });
      console.error(error);
      this.dialogRef.close();
      this.cambiarCargando();
    });
  }

  get tiposVehiculo(): string[] {
    return TIPOS_VEHICULO;
  }

  onResize(width) {
    this.columnasGrid = (width < 410) ? 1 : 2;
  }
}
