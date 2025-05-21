/*
  eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access
*/

// External Dependencies
import { EntriesQueries, EntrySkeletonType } from 'contentful';

// Local Dependencies
import { contentfulClient } from './contentfulClient';

export const getContentfulEntries = async (contentType: string) => {
  const response = await contentfulClient.getEntries({ content_type: contentType });
  return response.items;
};

export const getContentfulEntry = async (
  searchCriteria: EntriesQueries<EntrySkeletonType, undefined> | undefined,
) => {
  const response = await contentfulClient.getEntries(searchCriteria);
  return response.items[0];
};

// Post
// Todo: Add type for 'postEntryData'
const massagePostEntryData = (postEntryData: any) => {
  const {
    slug,
    title,
    coverImage,
    date,
    author,
    excerpt,
    content,
  } = postEntryData.fields;

  const massagedPostEntryData = {
    slug,
    title,
    coverImage: { url: coverImage?.fields.file.url },
    date,
    author: {
      name: author?.fields.name,
      picture: { url: author?.fields.picture.fields.file.url },
    },
    excerpt,
    content,
  };

  return massagedPostEntryData;
};

export const getPosts = async () => {
  const posts = await getContentfulEntries('post');
  return posts.map((post: any) => massagePostEntryData(post));
};

export const getPost = async (slug: string) => {
  const post = await getContentfulEntry({ content_type: 'post', 'fields.slug': slug });
  return massagePostEntryData(post);
}
