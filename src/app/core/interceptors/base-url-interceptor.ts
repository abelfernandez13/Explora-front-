import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.BASE_URL;

  if (/^https?:\/\//i.test(req.url)) {
    return next(req);
  }

  const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
  return next(apiReq);
};
