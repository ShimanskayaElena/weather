import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionStorageService } from '../services/session-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  errorStatus: string | undefined;
  errorMessage: string | undefined;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionStorageService: SessionStorageService
  ) {
    this.sessionStorageService.setWatchProcess(false);
    this.subscription = this.activatedRoute.queryParams.subscribe(queryParams => {
      this.errorStatus = queryParams.status;
      this.errorMessage = queryParams.message;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
