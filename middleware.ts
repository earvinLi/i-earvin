/* check https://nextjs.org/docs/app/api-reference/file-conventions/middleware for more info */

// External Dependencies
import { NextResponse, type NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';

// Internal Dependencies
import { defaultLocale, appLocales, cookieName, headerName } from '@/utilities/i18nUtils/i18nConfig';

acceptLanguage.languages(appLocales);

export const config = {
  // avoid matching for static files, API routes, etc.
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
};

export function middleware(req: NextRequest) {
  // ignore paths with 'icon' or 'chrome'
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) {
    return NextResponse.next();
  }

  let locale;
  // try to get locale from cookie
  if (req.cookies.has(cookieName)) locale = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  // if no cookie, check 'Accept-Language' header
  if (!locale) locale = acceptLanguage.get(req.headers.get('Accept-Language'));
  // default to fallback language if still undefined
  if (!locale) locale = defaultLocale;

  // check if the language is already in the path
  const pathLocale = appLocales.find((loc) => req.nextUrl.pathname.startsWith(`/${loc}`));
  const headers = new Headers(req.headers);
  headers.set(headerName, pathLocale || locale);

  // if locale is not in path, redirect to include it
  // this is a solid approach but need to consider extra i18n cases like navigation links or images
  if (!pathLocale && !req.nextUrl.pathname.startsWith('/_next')) {
    const newPathWithLocale = `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`;
    return NextResponse.redirect(new URL(newPathWithLocale, req.url));
  }

  // if a referer exists, try to detect locale from there and set the cookie accordingly
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '');
    const refererLocale = appLocales.find((locale) => refererUrl.pathname.startsWith(`/${locale}`));
    const response = NextResponse.next({ headers });
    if (refererLocale) response.cookies.set(cookieName, refererLocale);
    return response;
  }

  return NextResponse.next({ headers });
}
