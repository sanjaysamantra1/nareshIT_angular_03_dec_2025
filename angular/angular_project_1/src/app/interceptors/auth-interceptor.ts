import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Auth Interceptor called...')
  // const myToken = sessionStorage.getItem('myToken');
  if (req.url.includes('login')) {
    return next(req);
  } else {
    const myToken = 'ABCDEF123456'
    const requestWithToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${myToken}`
      }
    });
    return next(requestWithToken);
  }
};
