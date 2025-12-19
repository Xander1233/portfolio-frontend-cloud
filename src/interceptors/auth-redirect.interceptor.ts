import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { API_BASE_URL } from "../app/app.module";

@Injectable()
export class AuthRedirectInterceptor implements HttpInterceptor {

	private baseUrl: string = 'https://intranet.straim.de';

	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const withCreds = req.clone({ withCredentials: true });
		
		return next.handle(withCreds).pipe(catchError((err: any) => {
			
			if (err instanceof HttpErrorResponse && err.status === 401) {

				const returnUrl = encodeURIComponent(window.location.href);
				window.location.assign(`${this.baseUrl}/auth/login?returnUrl=${returnUrl}`);
				
				return new Observable<never>();
			}

			if (err instanceof HttpErrorResponse && err.status === 403) {
				window.location.assign('/error/403');
				return new Observable<never>();
			}

			if (err instanceof HttpErrorResponse && err.status === 500) {
				window.location.assign('/error/500?message=' + encodeURIComponent(err.message));
			}
			
			return throwError(() => err);
		}));
	}
}