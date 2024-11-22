// Internal Dependencies
import AppNavigation from '@/modules/AppNavigation';
import PostCard, { PostCardProps } from '@/components/PostCard';
import { getContentfulEntries } from '@/utilities/contentfulUtilities/contentfulClient';
import { massagePostEntryData } from '@/utilities/contentfulUtilities/contentfulDataHelpers';

export const revalidate = 1;

// Component Definition
export default async function Posts() {
  const allPosts = await getContentfulEntries('post');
  // Todo: whether 'post' here should have a type
  const massagedAllPosts = allPosts.map((post) => massagePostEntryData(post));

  return (
    <div className="min-w-[100vh] flex flex-col">
      <AppNavigation />
      <div className="w-[70%] my-0 mx-auto">
        <div className="flex flex-col items-end border-b-4 border-[#7d97ad] pb-4">
          <div className="text-6xl text-bold uppercase">Earvin Li</div>
          <div className="text-2xl my-2 mx-0">Full Stack Engineer</div>
        </div>
        <div className="text-4xl text-[#868e96] my-4 mx-0">Posts</div>
        <div className="mb-6">
          {massagedAllPosts.map((massagedPost: PostCardProps) => {
            const {
              slug,
              title,
              coverImage,
              date,
              author,
              excerpt,
            } = massagedPost;

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
      <footer className="w-[70%] my-0 mx-auto border-t border-gray-500 pt-3">
        <div className="text-lg">&copy; Earvin Li</div>
      </footer>
    </div>
  );
}
