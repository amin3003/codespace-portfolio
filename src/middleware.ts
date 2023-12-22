import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18nConfig';

export default createMiddleware({
	defaultLocale: defaultLocale,
	locales: locales,
});

export const config = {
	matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(en|tr)/:path*',

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		'/((?!_next|_vercel|.*\\..*).*)',
	],
};
