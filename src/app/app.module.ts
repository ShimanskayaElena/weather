import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PressurePipe } from './pipes/pressure.pipe';
import { WindPipe } from './pipes/wind.pipe';
import { ErrorIntercept } from './services/error.interceptor';
import { DomainComponent } from './domain/domain.component';
import { ErrorComponent } from './error/error.component';
import { RoundPipe } from './pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    ModalComponent,
    PressurePipe,
    WindPipe,
    DomainComponent,
    ErrorComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    }
  ],
  entryComponents: [ CityComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
