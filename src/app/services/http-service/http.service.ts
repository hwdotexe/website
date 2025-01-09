import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, filter, finalize, map, Observable } from 'rxjs';
import { LoadingService } from '../loading-service/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  GET<T>(url: string): Observable<HttpResponse<T>> {
    this.loadingService.beginLoad();

    let call = this.http.get<T>(url, this.httpCallOptions());
    return this.mapResponse<T>(call);
  }

  private mapResponse<T>(call: Observable<HttpEvent<T>>): Observable<HttpResponse<T>> {
    return call.pipe(
      filter(call => call.type == HttpEventType.Response),
      delay(200),
      map(call => call as HttpResponse<T>),
      catchError(error => {
        throw error;
      }),
      finalize(() => this.loadingService.stopLoad())
    );
  }

  private httpCallOptions(): any {
    return {
      observe: 'response'
    };
  }
}
