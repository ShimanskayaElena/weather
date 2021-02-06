import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {
  private modalDialog = new BehaviorSubject<boolean>(false);

  constructor() { }

  setModalDialog(value: boolean): void {
    this.modalDialog.next(value);
  }

  getModalDialog(): Observable<boolean> {
    return this.modalDialog.asObservable();
  }
}
