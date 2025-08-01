'use client';

// External Dependencies
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { TFunction } from 'i18next';

// Internal Dependencies
import Button from '@/components/base/Button';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import LinkClient from '@/components/Link/LinkClient';
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Local Dependencies
import ContactMeModal from './ContactMeModal';

// Local Variables
const getPageData = (translationHelper: TFunction) => [
  { name: translationHelper('link_name_home'), path: '' },
  { name: translationHelper('link_name_project'), path: '/projects' },
  { name: translationHelper('link_name_post'), path: '/posts' },
];

const appNavigationStyles = {
  font: {
    current: 'underline',
    other: 'hover:underline',
  },
};

const checkIsCurrentPath = (currentPath: string, route: string): boolean => currentPath === route;

// Todo: move these logics to 'FormattedDate'
// const options = { timeZone: 'Asia/Shanghai', hour: 'numeric' as const, minute: 'numeric' as const };
// const beijingTime = new Date().toLocaleString('en-US', options);

// Component Definition
export default function AppNavigation() {
  const pathname = usePathname();

  const { i18n, t } = useT('module_app_navigation');
  const { resolvedLanguage: currentLocale } = i18n;

  const [isContactMeModalOpen, setIsContactMeModalOpen] = useState(false);

  return (
    <>
      <div className='mx-auto mt-4 mb-8 flex w-[70%] flex-row'>
        <div className='flex flex-row gap-6'>
          {getPageData(t).map((page) => {
            const { name, path } = page;
            const localePath = `/${currentLocale}${path}`;
            const isCurrentPage = checkIsCurrentPath(localePath, pathname);
            const fontStyle = isCurrentPage
              ? appNavigationStyles.font.current
              : appNavigationStyles.font.other;

            return (
              <LinkClient
                key={`${path}-${name}`}
                href={path}
                className={classNames(
                  'text-lg decoration-[#00A3DA] decoration-2 underline-offset-8',
                  fontStyle,
                )}
              >
                {name}
              </LinkClient>
            );
          })}
        </div>
        <div className='grow' />
        <div className='flex flex-row items-center gap-4'>
          <Button onClick={() => setIsContactMeModalOpen(true)} variant='outlined'>
            {t('contact_me_button_text')}
          </Button>
          <LanguageChanger />
          {/* <div>{`Beijing.${beijingTime}`}</div> */}
        </div>
      </div>
      <ContactMeModal
        isContactMeModalOpen={isContactMeModalOpen}
        setIsContactMeModalOpen={setIsContactMeModalOpen}
      />
    </>
  );
}
