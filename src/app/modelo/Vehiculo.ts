export class Vehiculo {
  constructor(
    placa: string,
    tipo: string,
    cilindraje: number) {
      this.placa = placa;
      this.tipo = tipo;
      this.cilindraje = cilindraje;
    }
  placa: string;
  tipo: string;
  cilindraje: number;
}
