'use client';

import classNames from 'classnames';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pageData = [
  { name: 'Projects', path: '/' },
  { name: 'Posts', path: '/posts' },
];

const appNavigationStyles = {
  font: {
    current: 'text-lg text-[#7d97ad]',
    other: 'text-lg',
  },
};

const checkIsCurrentPath = (currentPath, route) => currentPath === route;

function AppNavigation() {
  const pathname = usePathname();

  return (
    <div className="w-[70%] mx-auto my-4">
      {pageData.map((page) => {
        const { name, path } = page;
        const isCurrentPage = checkIsCurrentPath(pathname, path);
        const fontStyle = isCurrentPage ? appNavigationStyles.font.current : appNavigationStyles.font.other;

        return (
          <Link
            key={`${path}-${name}`}
            href={path}
            className={classNames('mr-6 hover:underline', fontStyle)}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}

export default AppNavigation;
