// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'tr'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(tr|en)/:path*']
// };


import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(tr|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};