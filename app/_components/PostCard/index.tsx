// External Dependencies
import Link from 'next/link';
import { format } from 'date-fns';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import OptimizedImage from '@/components/OptimizedImage';

type PostCardProps = {
  slug: string;
  title: string;
  coverImage: { url: string };
  date: string;
  author: { name: string; picture: { url: string } };
  excerpt: string;
};

// Component Definition
export default function PostCard(props: PostCardProps) {
  const { slug, title, coverImage, date, author, excerpt } = props;

  return (
    <div className='border-b-2 border-gray-200 pb-6 last:border-b-0 last:pb-0'>
      <div className='flex items-center'>
        <div>
          <div className='h-40 w-60'>
            <OptimizedImage
              alt={`Cover image for ${title}`}
              src={coverImage.url}
              width={240}
              height={160}
              className='size-full object-cover'
            />
          </div>
        </div>
        <div className='ml-12 flex grow flex-col'>
          <Link
            href={`/posts/${slug}`}
            className='mb-4 text-3xl leading-snug hover:underline'
          >
            {title}
          </Link>
          <div className='mb-4 text-lg leading-relaxed'>{excerpt}</div>
          <div className='flex items-center'>
            {author && (
              <div className='mr-6 flex items-center gap-2'>
                <Avatar
                  name={author.name}
                  image={author.picture.url}
                  size='small'
                />
                <div className='text-sm'>{author.name}</div>
              </div>
            )}
            <time dateTime={date} className='text-sm'>
              {format(new Date(date), 'LLLL d, yyyy')}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
