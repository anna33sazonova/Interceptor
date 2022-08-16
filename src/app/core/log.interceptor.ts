import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.urlWithParams);
        const start = new Date().getTime();
        return  next.handle(req).pipe(
        tap((response: any) => {
            console.log(response);
            const timeElapsed = new Date().getTime() - start;
            console.log(`Request for ${req.urlWithParams} took ${timeElapsed} ms.`);
            if (response instanceof HttpResponse) {
                console.log(`Response Received`);
            }
        }
        )
        )}
}