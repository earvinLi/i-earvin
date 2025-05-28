/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// External Dependencies
import Link from 'next/link';
import { Document as TypeDocument } from '@contentful/rich-text-types';
import { ArrowBigLeft as ArrowBigLeftIcon } from 'lucide-react';

// Internal Dependencies
import CommentSection from '@/modules/post/CommentSection';
import Avatar from '@/components/base/Avatar';
import ContentfulRichText from '@/components/ContentfulRichText';
import FormattedDate from '@/components/FormattedDate';
import OptimizedImage from '@/components/OptimizedImage';
import {
  getPosts,
  getPost,
} from '@/utilities/contentfulUtilities/contentfulDataHelpers';
import { prisma } from '@/utilities/prismaUtils/prismaClient';
import IconButton from '@/components/base/IconButton';

type PostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const allPosts = await getPosts();
  return allPosts.map((post) => ({ slug: post.slug }));
}

// Component Definition
export default async function PostPage(props: PostPageProps) {
  const { params } = props;

  const { title, coverImage, author, content, date } = await getPost(
    params.slug,
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
            className='h-full w-full object-cover'
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
            <FormattedDate
              dateString={typeof date === 'string' ? date : ''}
              formatter='postPage'
            />
            <Link href='/posts'>
              <IconButton icon={<ArrowBigLeftIcon color='black' size={24} />} />
            </Link>
          </div>
          <div className='flex max-w-[768px] flex-col gap-6'>
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
