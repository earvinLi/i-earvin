/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// External Dependencies
import { headers } from 'next/headers';
import { Document as TypeDocument } from '@contentful/rich-text-types';
import { ArrowBigLeft as ArrowBigLeftIcon } from 'lucide-react';

// Internal Dependencies
import ContentfulRichText from '@/modules/post/ContentfulRichText';
import CommentSection from '@/modules/post/CommentSection';
import Avatar from '@/components/base/Avatar';
import FormattedDateServer from '@/components/FormattedDate/FormattedDateServer';
import IconButton from '@/components/base/IconButton';
import LanguageChanger from '@/components/LanguageChanger';
import LinkServer from '@/components/Link/LinkServer';
import OptimizedImage from '@/components/OptimizedImage';
import {
  getContentfulEntries,
  getContentfulEntry,
  getPost,
} from '@/utils/contentfulUtils/contentfulDataHelpers';
import { prisma } from '@/utils/prismaUtils/prismaClient';
import { defaultLocale, headerName } from '@/utils/i18nUtils/i18nConfig';
import { getT } from '@/utils/i18nUtils/i18nServerHelpers';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const allPosts = await getContentfulEntries('post');
  return allPosts.map((post) => ({ slug: post.fields.slug[defaultLocale] }));
}

// Component Definition
export default async function PostPage(props: PostPageProps) {
  const { params } = props;

  const { slug: postSlug } = await params;

  const headerList = await headers();
  const headerLocale = headerList.get(headerName) || defaultLocale;

  const { t } = await getT('page_post');

  const postEntry = await getContentfulEntry({
    content_type: 'post',
    'fields.slug': postSlug,
  });
  const { title, coverImage, author, content, date } = getPost(postEntry, headerLocale);

  const postComments = await prisma.postComment.findMany({
    where: { postId: postSlug },
  });

  return (
    <div className='mx-auto flex w-3/4 flex-col pt-12'>
      <article className='flex flex-col items-center gap-10'>
        <h1 className='text-3xl font-bold'>{typeof title === 'string' ? title : ''}</h1>
        <div className='relative h-[368px] w-[768px] object-cover'>
          <OptimizedImage alt={`Cover image for ${title}`} src={coverImage.url} fill priority />
        </div>
        {author && (
          <div className='flex flex-col items-center gap-2'>
            <Avatar name={author.name} image={author.picture.url} size='large' />
            <div className='text-xl font-bold'>{author.name}</div>
          </div>
        )}
        <div className='flex flex-row gap-8'>
          <div className='flex min-w-[64px] flex-col items-center gap-4'>
            <FormattedDateServer
              dateString={typeof date === 'string' ? date : ''}
              formatter='postPage'
            />
            <LinkServer href='/posts'>
              <IconButton
                icon={<ArrowBigLeftIcon color='black' size={24} />}
                tooltip={t('get_back_button_text')}
                tooltipPosition='bottom'
              />
            </LinkServer>
            <LanguageChanger />
          </div>
          <div className='flex max-w-screen-md flex-col gap-6'>
            <div>
              <ContentfulRichText content={content as TypeDocument} />
            </div>
            <section className='flex flex-col border-t border-gray-300 pt-6'>
              <CommentSection postId={postSlug} postComments={postComments} />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
