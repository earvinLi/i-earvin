// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import AppFooter from '@/modules/AppFooter';
import PostCard from '@/components/PostCard';
import { getPosts } from '@/utilities/contentfulUtilities/contentfulDataHelpers';
import { TypeMassagedPost } from '@/utilities/contentfulUtilities/contentfulDataTypes';

export const revalidate = 1;

// Component Definition
export default async function Posts() {
  const allPosts = await getPosts();

  return (
    <div className="min-w-[100vh] flex flex-col">
      <AppNavigation />
      <div className="w-[70%] my-0 mx-auto">
        <div className="flex flex-col items-end border-b-4 border-[#00A3DA] pb-4">
          <div className="text-6xl text-bold uppercase">Earvin Li</div>
          <div className="text-2xl my-2 mx-0">Full Stack Engineer</div>
        </div>
        <div className="text-4xl text-[#868e96] my-4 mx-0">Posts</div>
        <div className="mb-6">
          {allPosts.map((post: TypeMassagedPost) => {
            const {
              slug,
              title,
              coverImage,
              date,
              author,
              excerpt,
            } = post;

            return (
              <PostCard
                key={slug}
                slug={slug}
                title={title}
                coverImage={coverImage}
                date={date}
                author={author}
                excerpt={excerpt}
              />
            );
          })}
        </div>
      </div>
      <AppFooter />
    </div>
  );
}
