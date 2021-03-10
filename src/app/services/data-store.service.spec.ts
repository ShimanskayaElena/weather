import { TestBed } from '@angular/core/testing';

import { DataStoreService } from './data-store.service';

describe('DataStoreService ', () => {
  let service: DataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DataStoreService ]
    });
    service = TestBed.inject(DataStoreService);
    service.cities = [
      {
        id: 625144,
        name: 'Минск'
      },
      {
        id: 630429,
        name: 'Барановичи'
      }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.showCities.size).toBe(0);
  });

  it('should return an array containing all cities', () => {
    const cities = service.getSities();
    expect(cities).toEqual(service.cities);
  });

  it('must install the selected city', (done: DoneFn) => {
    const city = {
        id: 629634,
        name: 'Брест'
      };
    service.setSelectCity(city);
    service.getSelectCity().subscribe( value => {
      expect(value).toEqual(city);
      done();
    });
  });

  it('should return the selected city', (done: DoneFn) => {
    const city = {
        id: 630429,
        name: 'Барановичи'
      };
    service.setSelectCity(city);
    service.getSelectCity().subscribe(value => {
      expect(value).toEqual(city);
      done();
    });
  });

});
