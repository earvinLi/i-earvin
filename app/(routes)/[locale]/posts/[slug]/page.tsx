/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// External Dependencies
import Link from 'next/link';
import { headers } from 'next/headers';
import { Document as TypeDocument } from '@contentful/rich-text-types';
import { ArrowBigLeft as ArrowBigLeftIcon } from 'lucide-react';

// Internal Dependencies
import CommentSection from '@/modules/post/CommentSection';
import Avatar from '@/components/base/Avatar';
import ContentfulRichText from '@/components/ContentfulRichText';
import FormattedDateServer from '@/components/FormattedDate/FormattedDateServer';
import IconButton from '@/components/base/IconButton';
import LanguageChanger from '@/components/i18n/LanguageChanger';
import OptimizedImage from '@/components/OptimizedImage';
import {
  getContentfulEntries,
  getContentfulEntry,
  getPost,
} from '@/utilities/contentfulUtilities/contentfulDataHelpers';
import { prisma } from '@/utilities/prismaUtils/prismaClient';
import { defaultLocale, headerName } from '@/utilities/i18nUtils/i18nConfig';

type PostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allPosts = await getContentfulEntries('post');
  return allPosts.map((post) => ({ slug: post.fields.slug[defaultLocale] }));
}

// Component Definition
export default async function PostPage(props: PostPageProps) {
  const { params } = props;

  const headerList = headers();
  const headerLocale = headerList.get(headerName) || defaultLocale;

  const postEntry = await getContentfulEntry({
    content_type: 'post',
    'fields.slug': params.slug,
  });
  const { title, coverImage, author, content, date } = getPost(
    postEntry,
    headerLocale,
  );

  const postComments = await prisma.postComment.findMany({
    where: { postId: params.slug },
  });

  return (
    <div className='mx-auto flex w-3/4 flex-col pt-12'>
      <article className='flex flex-col items-center gap-10'>
        <h1 className='text-3xl font-bold'>
          {typeof title === 'string' ? title : ''}
        </h1>
        <div className='h-[368px] w-[768px]'>
          <OptimizedImage
            alt={`Cover image for ${title}`}
            src={coverImage.url}
            width={768}
            height={368}
            className='size-full object-cover'
          />
        </div>
        {author && (
          <div className='flex flex-col items-center gap-2'>
            <Avatar
              name={author.name}
              image={author.picture.url}
              size='large'
            />
            <div className='text-xl font-bold'>{author.name}</div>
          </div>
        )}
        <div className='flex flex-row gap-8'>
          <div className='flex min-w-[64px] flex-col items-center gap-4'>
            <FormattedDateServer
              dateString={typeof date === 'string' ? date : ''}
              formatter='postPage'
            />
            <Link href={`/${headerLocale}/posts`}>
              <IconButton icon={<ArrowBigLeftIcon color='black' size={24} />} />
            </Link>
            <LanguageChanger />
          </div>
          <div className='flex max-w-screen-md flex-col gap-6'>
            <div>
              <ContentfulRichText content={content as TypeDocument} />
            </div>
            <section className='flex flex-col border-t border-gray-300 pt-6'>
              <CommentSection
                postId={params.slug}
                postComments={postComments}
              />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
