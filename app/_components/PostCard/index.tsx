import Link from "next/link";
import { format } from "date-fns";

import Avatar from "@/components/Avatar";
import OptimizedImage from '@/components/OptimizedImage';

export type PostCardProps = {
  slug: string;
  title: string;
  coverImage: any;
  date: string;
  author: { name: string, picture: { url: string } };
  excerpt: string;
}

function PostCard(props: PostCardProps) {
  const {
    slug,
    title,
    coverImage,
    date,
    author,
    excerpt,
  } = props;

  return (
    <div className="flex items-center mb-8">
      <div className="w-80 h-60">
        <OptimizedImage
          alt={`Cover image for ${title}`}
          src={coverImage.url}
          width={320}
          height={240}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col grow ml-16">
        <div className="mb-6">
          {author && (
            <Avatar
              name={author.name}
              image={author.picture.url}
              direction='horizontal'
              size="large"
            />
          )}
        </div>
        <Link
          href={`/posts/${slug}`}
          className="hover:underline text-3xl leading-snug mb-3"
        >
          {title}
        </Link>
        <div className="text-lg leading-relaxed mb-4">{excerpt}</div>
        <time dateTime={date} className="text-lg mb-4">
          {format(new Date(date), "LLLL	d, yyyy")}
        </time>
      </div>
    </div>
  );
}

export default PostCard;

