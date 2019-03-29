export class TasaRepresentativaMercado {

  constructor(
    moneda: string,
    validoDesde: Date,
    validoHasta: Date,
    valor: number) {
      this.moneda = moneda;
      this.validoDesde = validoDesde;
      this.validoHasta = validoHasta;
      this.valor = valor;
    }
  moneda: string;
  validoDesde: Date;
  validoHasta: Date;
  valor: number;
}
