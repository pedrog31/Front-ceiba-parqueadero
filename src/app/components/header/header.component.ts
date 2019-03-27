import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  onResize(width) {
    this.titulo = (width <= 650) ? 'ADN Ceiba - Parqueadero' : 'ADN Ceiba - Sistema para la gestion de vehiculos en estacionamiento';
  }
}
