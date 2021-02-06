import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory, ComponentRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { GetDataService } from '../services/get-data.service';
import { DataStoreService } from '../services/data-store.service';
import { SessionStorageService } from '../services/session-storage.service';
import { from, Observable, Subscription } from 'rxjs';
import { City } from '../model/city';
import { Weather } from '../model/weather';
import { concatMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit, OnDestroy {

  data$: Subscription = new Subscription();

  @ViewChild('city', {static: true, read: ViewContainerRef }) city: ViewContainerRef | undefined;

  @Input() selectCity$: Observable<City>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    private dataStoreService: DataStoreService,
    private sessionStorageService: SessionStorageService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.selectCity$ = this.dataStoreService.getSelectCity();
  }

  ngOnInit(): void {
    this.show();

    this.selectCity$.pipe(
      switchMap(city => {
        return  this.getDataService.getData(city.id);
      })
    ).subscribe(
      value => {
        this.createCityComponent(value);
      },
      error => {
        this.router.navigate(
          ['error'],
          {relativeTo: this.route, queryParams: {status: error.status, message: error.message}}
        ).then(r => {});
      });
  }

  createCityComponent(data: Weather): void {
    const factory: ComponentFactory<CityComponent> = this.componentFactoryResolver.resolveComponentFactory(CityComponent);
    if (this.city && this.data$) {
      const cityComponentRef: ComponentRef<CityComponent> = this.city.createComponent(factory);
      cityComponentRef.instance.value = data;
      this.dataStoreService.setShowCities(data.id, cityComponentRef);
    }
  }

  show(): void {
    from(this.sessionStorageService.getSelectedCities()).pipe(
      concatMap(id => {
        return this.getDataService.getData(id);
      })
    ).subscribe(
      city => {
        this.createCityComponent(city);
      },
      error => {
        this.router.navigate(
          ['error'],
          {relativeTo: this.route, queryParams: { status: error.status, message: error.message }}
          ).then(r => {});
      }
    );
  }

  ngOnDestroy(): void {
    this.data$.unsubscribe();
    this.dataStoreService.showCities.forEach(( elem ) => {
      elem.destroy();
    });
  }

}
