import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthRedirectInterceptor } from '../interceptors/auth-redirect.interceptor';
import { AuthCredentialsInterceptor } from '../interceptors/auth-credentials.interceptor';
import { Base } from '../services/abstract/base.service';
import { APIService } from '../services/api.service';
import PROVIDERS from '../services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: AuthCredentialsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthRedirectInterceptor, multi: true },
    ...PROVIDERS
  ]
};
