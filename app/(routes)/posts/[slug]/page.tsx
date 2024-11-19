import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Avatar from '@/components/Avatar';
import ContentfulRichText from '@/components/ContentfulRichText';
import OptimizedImage from '@/components/OptimizedImage';
import { getContentfulEntries, getContentfulEntry } from '@/utilities/contentfulUtilities/contentfulClient';
import { massagePostEntryData } from '@/utilities/contentfulUtilities/contentfulDataHelpers';

type Asset = {
  sys: { id: string };
  url: string;
  description: string;
}

type RichTextAssetProps = {
  id: string;
  assets: Asset[] | undefined;
}

type PostPageProps = {
  params: { slug: string };
}

function RichTextAsset(props: RichTextAssetProps) {
  const { id, assets } = props;

  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) return <Image src={asset.url} layout="fill" alt={asset.description} />;
  return null;
}

export const revalidate = 1;

export async function generateStaticParams() {
  const allPosts = await getContentfulEntries('post');
  return allPosts.map((post) => ({ slug: massagePostEntryData(post).slug }));
}

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
        <h1 className="text-3xl font-bold mb-6">
          {title}
        </h1>
        <div className="w-[768px] h-[368px] mb-6">
          <OptimizedImage
            alt={`Cover image for ${title}`}
            src={coverImage.url}
            width={768}
            height={368}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mb-6">
          {author && (
            <Avatar
              name={author.name}
              image={author.picture.url}
              direction="vertical"
              size="large"
            />
          )}
        </div>
        {/* <div className="mb-6 text-lg">
            <Date dateString={post.date} />
        </div> */}
        <ContentfulRichText content={content}/>
      </article>
    </div>
  );
};
