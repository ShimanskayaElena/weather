import { TestBed } from '@angular/core/testing';
import { ModalDialogService } from './modal-dialog.service';
import {ifTrue} from 'codelyzer/util/function';

describe('ModalDialogService ', () => {
  let service: ModalDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ModalDialogService ]
    });
    service = TestBed.inject(ModalDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value', (done: DoneFn) => {
    service.getModalDialog().subscribe(value => {
      expect(value).toBe(false);
      done();
    });
  });

  it('should set a new value', (done: DoneFn) => {
    service.setModalDialog(true);
    service.getModalDialog().subscribe(value => {
      expect(value).toBe(true);
      done();
    });

  });
});
