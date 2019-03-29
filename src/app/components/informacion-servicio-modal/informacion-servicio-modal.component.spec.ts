import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionServicioModalComponent } from './informacion-servicio-modal.component';

describe('InformacionServicioModalComponent', () => {
  let component: InformacionServicioModalComponent;
  let fixture: ComponentFixture<InformacionServicioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionServicioModalComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionServicioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
