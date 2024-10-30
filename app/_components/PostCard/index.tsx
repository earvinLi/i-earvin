import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

// type ContentfulImageProps = {
//   src: string;
//   width?: number;
//   quality?: number;
//   [key: string]: any; // For other props that might be passed
// };

export type PostCardProps = {
  slug: string;
  title: string;
  coverImage: any;
  date: string;
  author: { name: string };
  excerpt: string;
}

// const contentfulImageLoader = ({ src, width, quality }: ContentfulImageProps) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

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
    <div className="flex mb-8">
      <div className="w-80 h-60 relative">
        <Image
          alt={`Cover image for ${title}`}
          src={coverImage.url}
          fill
          style={{ objectFit: "contain" }}
          // loader={contentfulImageLoader}
          // {...props}
        />
      </div>
      <div className="flex flex-col ml-8">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline text-3xl leading-snug mb-3"
        >
          {title}
        </Link>
        <time dateTime={date} className="text-lg mb-4">
          {format(new Date(date), "LLLL	d, yyyy")}
        </time>
        <div className="text-lg leading-relaxed mb-4">{excerpt}</div>
        <div className="text-xl font-bold">{`By ${author.name}`}</div>
      </div>
    </div>
  );
}

export default PostCard;

