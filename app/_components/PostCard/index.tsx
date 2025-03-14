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
  author: { name: string, picture: { url: string } };
  excerpt: string;
}

// Component Definition
export default function PostCard(props: PostCardProps) {
  const {
    slug,
    title,
    coverImage,
    date,
    author,
    excerpt,
  } = props;

  return (
    <div className="pb-6 border-b-2 border-accent last:border-b-0 last:pb-0">
      <div className="flex items-center">
        <div>
          <div className="w-60 h-40">
            <OptimizedImage
              alt={`Cover image for ${title}`}
              src={coverImage.url}
              width={240}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col grow ml-12">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline text-3xl leading-snug mb-4"
          >
            {title}
          </Link>
          <div className="text-lg leading-relaxed mb-4">{excerpt}</div>
          <div className="flex items-center">
            {author && (
              <div className="flex gap-2 items-center mr-6">
                <Avatar
                  name={author.name}
                  image={author.picture.url}
                  size="small"
                />
                <div className="text-sm">{author.name}</div>
              </div>
            )}
            <time dateTime={date} className="text-sm">
              {format(new Date(date), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
