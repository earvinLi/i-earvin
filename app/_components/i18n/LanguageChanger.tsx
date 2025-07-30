'use client';

// External Dependencies
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { Languages as LanguagesIcon } from 'lucide-react';

// Internal Dependencies
import DropdownMenu from '@/components/base/DropdownMenu';
import IconButton from '@/components/base/IconButton';
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Component Definition
export default function LanguageChanger() {
  const { i18n } = useT();
  const currentLocale = i18n.resolvedLanguage;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLocale = (newLocale: string) => {
    // set cookie for next-i18n-router
    /* const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`; */

    // redirect to the new locale path
    const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const localeData = [
    {
      value: 'en-US',
      name: 'English',
      onClick: () => handleChangeLocale('en-US'),
    },
    {
      value: 'zh-CN',
      name: '中文',
      onClick: () => handleChangeLocale('zh-CN'),
    },
    {
      value: 'ja-JP',
      name: '日本語',
      onClick: () => handleChangeLocale('ja-JP'),
    },
  ];

  return (
    <DropdownMenu
      triggerElement={<IconButton icon={<LanguagesIcon color='gray' />} />}
      optionData={localeData}
    />
  );
}
