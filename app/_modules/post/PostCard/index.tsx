// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import FormattedDateServer from '@/components/FormattedDate/FormattedDateServer';
import LinkServer from '@/components/Link/LinkServer';
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
          <div className='relative h-[160px] w-[240px] object-cover'>
            <OptimizedImage alt={`Cover image for ${title}`} src={coverImage.url} fill />
          </div>
        </div>
        <div className='ml-12 flex grow flex-col'>
          <LinkServer
            href={`/posts/${slug}`}
            className='mb-4 text-3xl leading-snug hover:underline'
          >
            {title}
          </LinkServer>
          <div className='mb-4 text-lg leading-relaxed'>{excerpt}</div>
          <div className='flex items-center'>
            {author && (
              <div className='mr-6 flex items-center gap-2'>
                <Avatar name={author.name} image={author.picture.url} size='small' />
                <div className='text-sm'>{author.name}</div>
              </div>
            )}
            <div className='text-sm'>
              <FormattedDateServer dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
