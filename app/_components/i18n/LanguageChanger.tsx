'use client';

// External Dependencies
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Component Definition
export default function LanguageChanger() {
  const { i18n } = useT();
  const currentLocale = i18n.resolvedLanguage;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    // const days = 30;
    // const date = new Date();
    // date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // const expires = date.toUTCString();
    // document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en-US">English</option>
      <option value="zh-CN">Chinese</option>
      <option value="ja-JP">Japanese</option>
    </select>
  );
}
