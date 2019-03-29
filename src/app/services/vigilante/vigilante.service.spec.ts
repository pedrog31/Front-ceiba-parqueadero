import { TestBed } from '@angular/core/testing';

import { VigilanteService } from './vigilante.service';

describe('VigilanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VigilanteService = TestBed.get(VigilanteService);
    expect(service).toBeTruthy();
  });
});
