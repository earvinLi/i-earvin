// External Dependencies
import { dir } from 'i18next';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

// Internal Dependencies
import { appLocales } from '@/utilities/i18nUtils/i18nConfig';

// Local Dependencies
import './globals.css';

// Local Variables
const geistSans = localFont({
  src: '../../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'I Earvin',
  description: 'Portfolio site collecting experiences and exploring new ideas',
};

// Type Definitions
type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return appLocales.map((locale) => ({ locale }));
}

// Component Definition
export default function RootLayout(props: RootLayoutProps) {
  const { children, params } = props;

  const { locale } = params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
