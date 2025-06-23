/* check https://nextjs.org/docs/app/api-reference/file-conventions/middleware for more info */

// External Dependencies
import { i18nRouter } from 'next-i18n-router';

// Local Dependencies
import i18nConfig from './i18n.config';

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
