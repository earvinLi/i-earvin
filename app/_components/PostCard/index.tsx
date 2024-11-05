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
    <div className="mb-6">
      <div className="flex items-center">
        <div className="w-60 h-40">
          <OptimizedImage
            alt={`Cover image for ${title}`}
            src={coverImage.url}
            width={240}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col grow ml-12">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline text-3xl leading-snug mb-4"
          >
            {title}
          </Link>
          <div className="text-lg leading-relaxed mb-4">{excerpt}</div>
          <div className="flex">
            <div className="mr-6">
              {author && (
                <Avatar
                  name={author.name}
                  image={author.picture.url}
                  direction='horizontal'
                  size="small"
                />
              )}
            </div>
            <time dateTime={date} className="text-sm">
              {format(new Date(date), "LLLL	d, yyyy")}
            </time>
          </div>
        </div>
      </div>
      <hr className="border-accent-2 mt-6"/>
    </div>
  );
}

export default PostCard;

