import { RegistroVehiculosComponent } from './registro-vehiculos.component';
import { TasaRepresentativaMercado } from 'src/app/modelo/TasaRepresentativaMercado';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';
import { Vehiculo } from 'src/app/modelo/Vehiculo';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  MatProgressBarModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
} from '@angular/material';
import { of, Observable } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { VigilanteService } from 'src/app/services/vigilante/vigilante.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

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

describe('RegistroVehiculosComponent', () => {
  let componente: RegistroVehiculosComponent;
  let fixture: ComponentFixture<RegistroVehiculosComponent>;
  const mockVigilanteService = new MockVigilanteService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatCardModule,
        ScrollingModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule],
      declarations: [ RegistroVehiculosComponent ],
      providers:    [ {provide: VigilanteService, useClass: MockVigilanteService } ]
    });

    fixture = TestBed.createComponent(RegistroVehiculosComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia poderse crear el componente', () => {
    expect(componente).toBeDefined();
  });

  it('deberia poderse mostrar trm', () => {
    componente.ngOnInit();
    mockVigilanteService.consultarTasa().subscribe(trm => {
      expect(componente.tasaRepresentativaMercado).toEqual(trm);
    });
  });

  it('deberia poderse mostrar trm en el card', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('COP 4500');
  });

  it('deberia poderse escribir en el input y obtener el valor de la placa', () => {
    const placa = 'USN78E';
    const inputPlaca = fixture.debugElement.query(By.css('input[formControlName=placa]')).nativeElement;
    inputPlaca.value = placa;
    inputPlaca.dispatchEvent(new Event('input'));
    const buttonSubmit = fixture.debugElement.query(By.css('form'));
    buttonSubmit.triggerEventHandler('ngSubmit', null);
    fixture.whenStable().then(() => {
      expect(placa).toEqual(componente.formConsulta.get('placa').value);
    });
  });
});
