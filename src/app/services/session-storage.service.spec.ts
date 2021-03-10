import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService ', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SessionStorageService ]
    });
    service = TestBed.inject(SessionStorageService);
    service.watch.next(false);
  });

  afterEach(() => {
    service.selectedCities = [];
    sessionStorage.setItem(service.keyForCities, JSON.stringify(service.selectedCities));
  });

  it('should be created', (done: DoneFn) => {
    expect(service).toBeTruthy();
    expect(service.keyForWatch).toBe('watch');
    expect(service.keyForCities).toBe('selectedCities');
    expect(service.getSelectedCities.length).toBe(0);
    service.watch.subscribe( value => {
      expect(value).toBeFalse();
      done();
    });
  });

  it('should add a new item to the array', () => {
    const id1 = 625144;
    service.setSelectedCities(id1);
    expect(service.selectedCities.includes(id1)).toBeTruthy();
    expect(service.selectedCities.length).toBe(1);
    expect(service.getSelectedCities().length).toBe(1);
    let selectedCities = JSON.parse(sessionStorage.getItem(service.keyForCities) as string);
    expect(selectedCities).toEqual([id1]);

    const id2 = 620127;
    service.setSelectedCities(id2);
    expect(service.selectedCities.includes(id2)).toBeTruthy();
    expect(service.selectedCities.length).toBe(2);
    expect(service.getSelectedCities().length).toBe(2);
    selectedCities = JSON.parse(sessionStorage.getItem(service.keyForCities) as string);
    expect(selectedCities).toEqual([id1, id2]);
  });

  it('should return an array of numbers', () => {
    expect(service.getSelectedCities().length).toBe(0);
    const id = 629634;
    service.setSelectedCities(id);
    expect(service.getSelectedCities().length).toBe(1, 'added one item');
  });

  it('should turn on / off the weather tracking mode', () => {
    service.setWatchProcess(true);
    let watch = service.watch.getValue();
    expect(watch).toBeTruthy();
    let watchSessionStorage = JSON.parse(sessionStorage.getItem(service.keyForWatch) as string);
    expect(watchSessionStorage).toBeTruthy();

    service.setWatchProcess(false);
    watch = service.watch.getValue();
    expect(watch).toBeFalse();
    watchSessionStorage = JSON.parse(sessionStorage.getItem(service.keyForWatch) as string);
    expect(watchSessionStorage).toBeFalse();
  });

  it('should return the current state of the tracking mode', () => {
    service.getWatchProcess();
    const watch = JSON.parse(sessionStorage.getItem(service.keyForWatch) as string);
    expect(watch).toBeFalse();
  });

  it('should return the current state of the tracking buttons', (done: DoneFn) => {
    service.disabledButton();
    service.disabledButton().subscribe(value => {
      expect(value).toBeFalse();
    });
    done();
  });
});
