// Internal Dependencies
import AppNavigation from '@/modules/app/AppNavigation';
import AppFooter from '@/modules/app/AppFooter';
import OptimizedImage from '@/components/OptimizedImage';
import { getT } from '@/utils/i18nUtils/i18nServerHelpers';

// Component Definition
export default async function Home() {
  const { t } = await getT('page_home');

  return (
    <div className='flex h-screen w-screen flex-col'>
      <AppNavigation />
      <div className='mx-auto flex h-full w-[70%] flex-row items-center'>
        <div className='flex grow flex-col'>
          <div className='mb-6 text-5xl'>{t('greeting_message')}</div>
          <div className='mb-8 text-9xl font-bold'>{t('name_message')}</div>
          <div className='w-[512px] text-lg'>{t('intro_message')}</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <OptimizedImage
            alt='Profile image of Earvin'
            src='/images/profile_earvin.jpg'
            width={240}
            height={160}
            className='rounded-2xl'
          />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
