import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TimestampInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started : number = Date.now();
        return next.handle(request).do(event => {
            if (event instanceof HttpResponse) {
              const elapsed = Date.now() - started;
              console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
            }
          });
    }
} 
