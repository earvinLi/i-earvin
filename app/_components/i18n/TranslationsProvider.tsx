'use client';

// External Dependencies
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';

// Internal Dependencies
import initTranslations from '../../_utilities/i18nUtils/i18nNextClient';

// Type Definitions
type TranslationsProviderProps = {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: any;
};

// Component Definition
export default function TranslationsProvider(props: TranslationsProviderProps) {
  const {
    children,
    locale,
    namespaces,
    resources
  } = props;

  const i18nInstance = createInstance();

  initTranslations(locale, namespaces, i18nInstance, resources);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
