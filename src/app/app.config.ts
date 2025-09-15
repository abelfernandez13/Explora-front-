import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './core/interceptors/base-url-interceptor';
import { AUTH_API } from './core/auth/auth-tokens';
import { FirebaseAuthApi } from './core/auth/infrastructure/firebase-auth-api';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
    {
      provide: AUTH_API,
      useFactory: () => new FirebaseAuthApi(),
    },
  ],
};
