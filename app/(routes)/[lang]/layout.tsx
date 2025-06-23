// Internal Dependencies
import TranslationsProvider from '@/components/i18n/TranslationsProvider';
import initTranslations from '@/utilities/i18nUtils/i18nNextClient';

// Local Variables
export const metadata = {
  title: 'I Earvin',
  description: 'Portfolio site collecting experiences and exploring new ideas',
}

// Type Definitions
type RouteLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

// Component Definition
export default async function RouteLayout(props: RouteLayoutProps) {
  const { children, params } = props;
  const { lang } = params;

  const { resources } = await initTranslations(lang, ['home']);

  return (
    <TranslationsProvider
      namespaces={['home']}
      locale={lang}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  )
}
