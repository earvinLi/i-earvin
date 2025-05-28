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
    <div className='flex min-w-[100vw] flex-col'>
      <AppNavigation />
      <div className='mx-auto my-0 w-[70%]'>
        <div className='flex flex-col items-end border-b-4 border-[#00A3DA] pb-4'>
          <div className='text-bold text-6xl uppercase'>Earvin Li</div>
          <div className='mx-0 my-2 text-2xl'>Full Stack Engineer</div>
        </div>
        <div className='mx-0 my-4 text-4xl text-[#868e96]'>Posts</div>
        <div className='mb-6 flex flex-col gap-6'>
          {allPosts.map((post: TypeMassagedPost) => {
            const { slug, title, coverImage, date, author, excerpt } = post;

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
