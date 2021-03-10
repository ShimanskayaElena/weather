import { TestBed } from '@angular/core/testing';

import { IconsService } from './icons.service';
import { faSun, faSmog } from '@fortawesome/free-solid-svg-icons';

describe('IconsService', () => {
  let service: IconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return icon', () => {
    let key = '01d';
    let icon = service.getIcon(key);
    expect(icon).toEqual(faSun);

    key = '50d';
    icon = service.getIcon(key);
    expect(icon).toEqual(faSmog);
  });
});
