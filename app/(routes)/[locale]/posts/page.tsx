// External Dependencies
import { headers } from 'next/headers';

// Internal Dependencies
import AppNavigation from '@/modules/app/AppNavigation';
import AppFooter from '@/modules/app/AppFooter';
import PostCard from '@/modules/post/PostCard';
import { getContentfulEntries, getPosts } from '@/utils/contentfulUtils/contentfulDataHelpers';
import { TypeMassagedPost } from '@/utils/contentfulUtils/contentfulDataTypes';
import { getT } from '@/utils/i18nUtils/i18nServerHelpers';
import { headerName, defaultLocale } from '@/utils/i18nUtils/i18nConfig';

export const revalidate = 1;

// Component Definition
export default async function Posts() {
  const headerList = await headers();
  const headerLocale = headerList.get(headerName) || defaultLocale;

  const { t } = await getT('page_posts');

  const allPostEntries = await getContentfulEntries('post');
  const allPosts = getPosts(allPostEntries, headerLocale);

  return (
    <div className='flex min-w-[100vw] flex-col'>
      <AppNavigation />
      <div className='mx-auto my-0 w-[70%]'>
        <div className='flex flex-col items-end border-b-4 border-[#00A3DA] pb-4'>
          <div className='text-6xl font-bold uppercase'>{t('earvin_full_name')}</div>
          <div className='mx-0 my-2 text-2xl'>{t('earvin_title')}</div>
        </div>
        <div className='mx-0 my-4 text-4xl text-[#868e96]'>{t('posts_page_title')}</div>
        <div className='mb-6 flex flex-col gap-6'>
          {allPosts.map((post: TypeMassagedPost) => {
            const { slug, title, coverImage, date, author, excerpt } = post;

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                coverImage={coverImage}
                date={date}
                author={author}
                excerpt={excerpt}
              />
            );
          })}
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
