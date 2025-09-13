import { InjectionToken } from '@angular/core';
import { AuthApi } from './application/api';

export const AUTH_API = new InjectionToken<AuthApi>('AUTH_API');
