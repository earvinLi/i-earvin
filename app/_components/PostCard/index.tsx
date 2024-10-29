import Link from "next/link";

export type PostCardProps = {
  slug: string;
  title: string;
  author: { name: string };
}

function PostCard(props: PostCardProps) {
  const {
    slug,
    title,
    author,
  } = props;

  return (
    <div>
      <Link href={`/posts/${slug}`} className="hover:underline">
        {title}
      </Link>
      <div>{author.name}</div>
    </div>
  );
}

export default PostCard;

