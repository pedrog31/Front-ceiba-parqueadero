import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.scss']
})
export class RegistroVehiculosComponent implements OnInit {
  formConsulta: FormGroup;
  cargando: boolean;

  constructor(private fb: FormBuilder) {
    this.crearForm();
  }

  ngOnInit() {
  }

  consultar () {

  }

  crearForm() {
    this.formConsulta = this.fb.group({
      placa: ['', Validators.required]
    });
  }
}
