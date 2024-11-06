import { draftMode } from "next/headers";

import AppNavigation from '@/modules/AppNavigation';
import PostCard, { PostCardProps } from '@/components/PostCard';
import { getAllPosts } from "@/utilities/apiUtilities";

import pageStyles from './Posts.module.css';

const {
  Page_pageStyle,
  Page_bodySectionStyle,
  Page_titleContainerStyle,
  Page_titleStyle,
  Page_subtitleStyle,
  Page_projectTitleStyle,
  Page_projectSectionStyle,
  Page_footerSectionStyle,
  Page_copyrightTextStyle,
} = pageStyles;

export const revalidate = 1;

export default async function Posts() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);

  return (
    <div className={Page_pageStyle}>
      <AppNavigation />
      <div className={Page_bodySectionStyle}>
        <div className={Page_titleContainerStyle}>
          <div className={Page_titleStyle}>Earvin Li</div>
          <div className={Page_subtitleStyle}>Full Stack Engineer</div>
        </div>
        <div className={Page_projectTitleStyle}>Posts</div>
        <div className={Page_projectSectionStyle}>
          {allPosts.map((post: PostCardProps) => {
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
      <footer className={Page_footerSectionStyle}>
        <div className={Page_copyrightTextStyle}>&copy; Earvin Li</div>
      </footer>
    </div>
  );
}
