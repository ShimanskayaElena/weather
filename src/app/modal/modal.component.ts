import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { ModalDialogService } from '../services/modal-dialog.service';
import { SessionStorageService } from '../services/session-storage.service';
import { City} from '../model/city';

@Component({
  selector: 'app-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  cities: Array<City>;
  errorMessage = false;

  constructor(
    private  dataStoreService: DataStoreService,
    private modalDialogService: ModalDialogService,
    private sessionStorageService: SessionStorageService
  ) {
    this.cities = this.dataStoreService.getSities();
  }

  ngOnInit(): void { }

  selectCity(city: City): void {
    if ( this.dataStoreService.showCities.has(city.id) ) {
      this.errorMessage = true;
    } else {
      this.sessionStorageService.setSelectedCities(city.id);
      this.dataStoreService.setSelectCity(city);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.errorMessage = false;
    this.modalDialogService.setModalDialog(false);
  }

}
