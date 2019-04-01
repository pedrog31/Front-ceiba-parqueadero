import { VigilanteService } from './vigilante.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ServicioParqueo } from 'src/app/modelo/ServicioParqueo';

describe('VigilanteService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  /// Tests begin ///
  it('can test HttpClient.get', () => {
    const testUrl = 'vigilante/estado';
    const testData: ServicioParqueo = {
      fechaIngreso: new Date(),
      fechaSalida: new Date(),
      pagado: true,
      valor: 4500,
      vehiculo: {
        placa: 'USN78E',
        tipo: 'Carro',
        cilindraje: 1200,
      },
    };

    // Make an HTTP GET request
    httpClient.get<ServicioParqueo>(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
