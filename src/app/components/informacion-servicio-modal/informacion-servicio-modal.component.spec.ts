import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionServicioModalComponent } from './informacion-servicio-modal.component';
import { Observable, of } from 'rxjs';
import { TasaRepresentativaMercado } from 'src/app/modelo/TasaRepresentativaMercado';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';
import { Vehiculo } from 'src/app/modelo/Vehiculo';
import { VigilanteService } from 'src/app/services/vigilante/vigilante.service';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatProgressBarModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatRadioModule,
  MatSnackBarModule,
  MAT_DIALOG_DATA,
  MatDialogRef } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockVigilanteService {
  consultarTasa(): Observable<TasaRepresentativaMercado> {
    return of(new TasaRepresentativaMercado ('COP', new Date(), new Date(), 4500));
  }

  consultarEstado(): Observable<ServicioParqueo[]> {
    return of([new ServicioParqueo(new Date(), new Date(), true, 4500, new Vehiculo('USN78E', 'Moto', 25))]);
  }

  consultarServicio(placa: string) {
    return of(new ServicioParqueo(new Date(), new Date(), false, 4500, new Vehiculo(placa, 'Moto', 25)));
  }
}

describe('InformacionServicioModalComponent', () => {
  let componente: InformacionServicioModalComponent;
  let fixture: ComponentFixture<InformacionServicioModalComponent>;
  const mockVigilanteService = new MockVigilanteService();
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        ScrollingModule,
        MatProgressBarModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatRadioModule,
        FormsModule,
        MatSnackBarModule,
        MatIconModule],
      declarations: [InformacionServicioModalComponent],
      providers:    [
        {provide: MAT_DIALOG_DATA, useValue: new ServicioParqueo(new Date(), new Date(), false, 4500, new Vehiculo('USN78E', 'Moto', 25)) },
        {provide: VigilanteService, useValue: mockVigilanteService },
        {provide: MatDialogRef, useValue: mockDialogRef }
       ]
    });
    fixture = TestBed.createComponent(InformacionServicioModalComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia poderse crear el componente', () => {
    expect(componente).toBeDefined();
  });

  it('deberia mostrar boton de pago', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Registrar pago');
  });
});
