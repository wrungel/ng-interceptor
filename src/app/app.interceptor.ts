import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimestampInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let started : number = new Date().getTime();
        let result = next.handle(request);
        result.subscribe(
            ok => {},
            err => {},
            () => console.log(
                request.url + " completed in " + (new Date().getTime() - started) + " msec"
            )
        )
        return result;
    }
} 
