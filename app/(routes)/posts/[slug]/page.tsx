// External Dependencies
import Link from 'next/link';

// Internal Dependencies
import Avatar from '@/components/Avatar';
import ContentfulRichText from '@/components/ContentfulRichText';
import FormattedDate from '@/components/FormattedDate';
import OptimizedImage from '@/components/OptimizedImage';
import { getContentfulEntries, getContentfulEntry } from '@/utilities/contentfulUtilities/contentfulClient';
import { massagePostEntryData } from '@/utilities/contentfulUtilities/contentfulDataHelpers';

type PostPageProps = {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allPosts = await getContentfulEntries('post');
  const massagedAllPosts = allPosts.map((post) => massagePostEntryData(post));
  return massagedAllPosts.map((massagedPost) => ({ slug: massagedPost.slug }));
}

// Component Definition
export default async function PostPage(props: PostPageProps) {
  const { params } = props;

  const post = await getContentfulEntry({
    content_type: 'post',
    'fields.slug': params.slug,
  });

  const {
    title,
    coverImage,
    author,
    content,
    date,
  } = massagePostEntryData(post);

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
          {title}
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
            <FormattedDate dateString={date} formatter="postPage" />
          </div>
          <div className="max-w-[768px]">
            <ContentfulRichText content={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
