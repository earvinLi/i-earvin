'use client';

// External Dependencies
import { Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-react'; // Todo: use not deprecated icons

// Internal Dependencies
import IconButton from '@/components/base/IconButton';
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

// Component Definition
export default function AppFooter() {
  const { t } = useT('module_app_footer');

  return (
    <footer className='mx-auto my-0 flex w-[70%] flex-row items-center justify-between border-t-2 border-[#00A3DA] py-4'>
      <div>
        <span className='mr-4 text-xl font-bold'>I Earvin</span>
        <span className='text-sm text-gray-500'>{t('copyright_text')}</span>
      </div>
      <div className='flex flex-row gap-0.5'>
        <IconButton
          icon={<GithubIcon color='gray' size={22} />}
          tooltip='GitHub'
          tooltipPosition='top'
          onClick={() =>
            window.open('https://github.com/earvinLi', '_blank', 'noopener, noreferrer')
          }
        />
        <IconButton
          icon={<LinkedinIcon color='gray' size={22} />}
          tooltip='Linkedin'
          tooltipPosition='top'
          onClick={() =>
            window.open('https://linkedin.com/in/earvinli', '_blank', 'noopener, noreferrer')
          }
        />
      </div>
    </footer>
  );
}
