import { Vehiculo } from './Vehiculo';

export class ServicioParqueo {

  constructor(
    fechaIngreso: Date,
    fechaSalida: Date,
    pagado: boolean,
    valor: number,
    vehiculo: Vehiculo) {
      this.fechaIngreso = fechaIngreso;
      this.fechaSalida = fechaSalida;
      this.pagado = pagado;
      this.valor = valor;
      this.vehiculo = vehiculo;
    }
  fechaIngreso: Date;
  fechaSalida: Date;
  pagado: boolean;
  valor: number;
  vehiculo: Vehiculo;

}
