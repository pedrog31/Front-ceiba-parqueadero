import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_URL, VIGILANTE_ENDPOINT } from 'src/constantes';
import { Observable } from 'rxjs';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';
import { Vehiculo } from 'src/app/modelo/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VigilanteService {

  constructor(private http: HttpClient)  {
  }

  registrarIngresoVehiculo(vehiculo: Vehiculo): Observable<HttpResponse<Response>> {
    const url = `${API_URL}${VIGILANTE_ENDPOINT}ingreso`;
    return this.http.put<Response>(url, vehiculo, { observe: 'response' });
  }

  consultarServicio(placa: string): Observable<ServicioParqueo> {
    const url = `${API_URL}${VIGILANTE_ENDPOINT}consulta-servicio?placa=${placa}`;
    return this.http.post<ServicioParqueo>(url, null).pipe();
  }

  registrarPagoVehiculo(pagado: boolean, placa: string): Observable<HttpResponse<Response>> {
    const url = `${API_URL}${VIGILANTE_ENDPOINT}pago?pagado=${pagado}&placa=${placa}`;
    return this.http.post<Response>(url, null, { observe: 'response' });
  }

  consultarEstado(): Observable<ServicioParqueo[]> {
    const url = `${API_URL}${VIGILANTE_ENDPOINT}estado`;
    return this.http.get<ServicioParqueo[]>(url).pipe();
  }
}
