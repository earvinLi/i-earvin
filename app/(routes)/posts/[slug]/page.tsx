// External Dependencies
import Link from 'next/link';
import { Document as TypeDocument } from '@contentful/rich-text-types';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import ContentfulRichText from '@/components/ContentfulRichText';
import FormattedDate from '@/components/FormattedDate';
import OptimizedImage from '@/components/OptimizedImage';
import { getPosts, getPost } from '@/utilities/contentfulUtilities/contentfulDataHelpers';

type PostPageProps = {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allPosts = await getPosts();
  return allPosts.map((post) => ({ slug: post.slug }));
}

// Component Definition
export default async function PostPage(props: PostPageProps) {
  const { params } = props;

  const {
    title,
    coverImage,
    author,
    content,
    date,
  } = await getPost(params.slug);

  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight">
        <Link href="/posts" className="hover:underline">
          Back
        </Link>
        .
      </h2>
      <article className="w-3/4 mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">
          {typeof title === 'string' ? title : ''}
        </h1>
        <div className="w-[768px] h-[368px] mb-8">
          <OptimizedImage
            alt={`Cover image for ${title}`}
            src={coverImage.url}
            width={768}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mb-8">
          {author && (
            <Avatar
              name={author.name}
              image={author.picture.url}
              direction="vertical"
              size="large"
            />
          )}
        </div>
        <div className="flex">
          <div className="min-w-[64px] mr-8">
            <FormattedDate
              dateString={typeof date === 'string' ? date : ''}
              formatter="postPage"
            />
          </div>
          <div className="max-w-[768px]">
            <ContentfulRichText content={content as TypeDocument} />
          </div>
        </div>
      </article>
    </div>
  );
}
