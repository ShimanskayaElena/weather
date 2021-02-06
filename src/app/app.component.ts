import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from './services/get-data.service';
import { DataStoreService } from './services/data-store.service';
import { ModalDialogService } from './services/modal-dialog.service';
import { SessionStorageService } from './services/session-storage.service';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { City } from './model/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('city', {static: true, read: ViewContainerRef }) city: ViewContainerRef | undefined;

  data: Subscription = new Subscription();
  strim$: Subscription = new Subscription();
  modalDialog$: Observable<boolean>;
  disabledButton$: Observable<boolean>;

  @Input() selectCity$: Observable<City>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private getDataService: GetDataService,
    private dataStoreService: DataStoreService,
    private modalDialogService: ModalDialogService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private sessionStorageService: SessionStorageService
    ) {
    this.modalDialog$ = this.modalDialogService.getModalDialog();
    this.selectCity$ = this.dataStoreService.getSelectCity();
    this.disabledButton$ = this.sessionStorageService.disabledButton();
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.sessionStorageService.getWatchProcess()) {
      this.startStrim();
    }
  }

  startStrim(): void {
    this.sessionStorageService.setWatchProcess(true);
    this.strim$ = interval(60000).pipe(
        tap(item => {
          this.dataStoreService.showCities.forEach((elem, key) => {
            this.data = this.getDataService.getData(key).subscribe(
              data => {
              elem.instance.value = {...data};
              elem.injector.get(ChangeDetectorRef).detectChanges();
            },
              error => {
                this.router.navigate(
                  ['error'],
                  {relativeTo: this.activatedRoute, queryParams: {status: error.status, message: error.message}}
                ).then(r => {});
              }
            );
          });
        })
    ).subscribe(v => v);
  }

  stopStrim(): void {
    this.sessionStorageService.setWatchProcess(false);
    this.strim$.unsubscribe();
  }

  openModalDialog(): void {
    this.modalDialogService.setModalDialog(true);
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
  }

}
