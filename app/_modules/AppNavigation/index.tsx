'use client';

// External Dependencies
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

// Internal Dependencies
import Button from '@/components/base/Button';
import ContactMeModal from '@/modules/project/ContactMeModal';

// Local Variables
const pageData = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Posts', path: '/posts' },
];

const appNavigationStyles = {
  font: {
    current: 'underline',
    other: 'hover:underline',
  },
};

const checkIsCurrentPath = (currentPath: string, route: string): boolean =>
  currentPath === route;

// Todo: move these logics to 'FormattedDate'
// eslint-disable-next-line max-len
// const options = { timeZone: 'Asia/Shanghai', hour: 'numeric' as const, minute: 'numeric' as const };
// const beijingTime = new Date().toLocaleString('en-US', options);

// Component Definition
export default function AppNavigation() {
  const pathname = usePathname();

  const [isContactMeModalOpen, setIsContactMeModalOpen] = useState(false);

  return (
    <>
      <div className='mx-auto mb-8 mt-4 flex w-[70%] flex-row'>
        <div className='flex flex-row gap-6'>
          {pageData.map((page) => {
            const { name, path } = page;
            const isCurrentPage = checkIsCurrentPath(pathname, path);
            const fontStyle = isCurrentPage
              ? appNavigationStyles.font.current
              : appNavigationStyles.font.other;

            return (
              <Link
                key={`${path}-${name}`}
                href={path}
                className={classNames(
                  'text-lg decoration-[#00A3DA] decoration-2 underline-offset-8',
                  fontStyle,
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className='flex-grow' />
        <div className='flex flex-row items-center gap-4'>
          <Button
            onClick={() => setIsContactMeModalOpen(true)}
            variant='outlined'
          >
            Contact me
          </Button>
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
