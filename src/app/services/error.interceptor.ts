import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export class ErrorIntercept implements HttpInterceptor {
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        // let errorMessage = '';
        // if (err.error instanceof ErrorEvent) {
        //   errorMessage = `Error: ${err.error.message}`;
        // } else {
        //   errorMessage = `Error Status: ${err.status} Message: ${err.message}`;
        // }
        // return throwError(errorMessage);
        return throwError({
          status: err.status,
          message: err.message
        });
      })
    );
  }
}
