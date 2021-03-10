import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetDataService } from './get-data.service';
import { Weather } from '../model/weather';
import {HttpErrorResponse} from '@angular/common/http';

describe('GetDataService', () => {
  let getDataService: GetDataService;
  let httpTestingController: HttpTestingController;
  const expectedData: Weather = {
    base: 'stations',
    clouds: {all: 100},
    cod: 200,
    coord: {lon: 26.0139, lat: 53.1327},
    dt: 1613397396,
    id: 630429,
    main: {
      feels_like: -13.98,
      humidity: 95,
      pressure: 1032,
      temp: -8.08,
      temp_max: -8.08,
      temp_min: -8.08
    },
    name: 'Барановичи',
    sys: {country: 'BY', sunrise: 1613367229, sunset: 1613402795},
    timezone: 10800,
    visibility: 4016,
    weather: [
      {id: 804, main: 'Clouds', description: 'пасмурно', icon: '04d'}
    ],
    wind: {speed: 4.2, deg: 329}
  };
  const url = 'https://api.openweathermap.org/data/2.5/weather?id=630429&lang=ru&appid=e47f39b2a7356377c12758ab1399b3a3&units=metric';
  const id = 630429;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ GetDataService ]
    });
    getDataService = TestBed.inject(GetDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(getDataService).toBeTruthy();
  });

  it('should execute the data request correctly', () => {
      getDataService.getData(id).subscribe((data) => {
        expect(data).toEqual(expectedData);
      });

      const requestWrapper = httpTestingController.expectOne(url);
      expect(requestWrapper.request.method).toEqual('GET');
      requestWrapper.flush(expectedData);
    }
  );

  it('should return an error from the server', () => {
      const message = 'server error';

      getDataService.getData(id).subscribe(
        (response) => fail('should fail with the 401 error'),
        (err: HttpErrorResponse) => {
           expect(err.status).toBe(401, 'status');
           expect(err.statusText).toBe('Unauthorized');
           expect(err.error).toBe(message, 'message');
        }
      );

      const requestWrapper = httpTestingController.expectOne(url);
      expect(requestWrapper.request.method).toEqual('GET');
      requestWrapper.flush(
        message,
        {
          status: 401,
          statusText: 'Unauthorized'
        }
      );
  });
});
