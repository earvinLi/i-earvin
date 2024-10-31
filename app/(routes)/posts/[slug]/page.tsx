import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { getAllPosts, getPostAndMorePosts } from "@/utilities/apiUtilities";

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

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function PostPage(props: PostPageProps) {
  const { params } = props;

  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);
  const {
    title,
    coverImage,
  } = post;

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article className="w-3/4 mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">
          {title}
        </h1>
        <div className="w-80 h-60 relative mb-4">
          <Image
            alt={`Cover image for ${title}`}
            src={coverImage.url}
            fill
            style={{ objectFit: "contain" }}
            // loader={contentfulImageLoader}
            // {...props}
          />
        </div>
        <div className="mb-4">
          {post.author && (
            // <Avatar name={post.author.name} picture={post.author.picture} />
            post.author.name
          )}
        </div>
        {/* <div className="mb-6 text-lg">
            <Date dateString={post.date} />
        </div> */}
        <div className="">
          {documentToReactComponents(post.content.json, {
                renderNode: {
                  [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
                    <RichTextAsset
                      id={node.data.target.sys.id}
                      assets={post.content.links.assets.block}
                    />
                  ),
                },
          })}
        </div>
      </article>
    </div>
  );
}

export default PostPage;
