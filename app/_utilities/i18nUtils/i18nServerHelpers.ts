// External Dependencies
import { headers } from 'next/headers';

// Local Dependencies
import i18next from './i18nextInstance';
import { headerName } from './i18nConfig';

export async function getT(namespace, options) {
  const headerList = await headers();
  const headerLocale = headerList.get(headerName);

  if (headerLocale && i18next.resolvedLanguage !== headerLocale) {
    await i18next.changeLanguage(headerLocale);
  }

  if (namespace && !i18next.hasLoadedNamespace(namespace)) {
    await i18next.loadNamespaces(namespace);
  }

  return {
    t: i18next.getFixedT(
      headerLocale ?? i18next.resolvedLanguage,
      Array.isArray(namespace) ? namespace[0] : namespace,
      options?.keyPrefix,
    ),
    i18n: i18next,
  };
}
