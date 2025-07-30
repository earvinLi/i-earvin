/*
  eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-return
*/

// External Dependencies
import { EntriesQueries, EntrySkeletonType } from 'contentful';

// Local Dependencies
import { defaultLocale } from '@/utilities/i18nUtils/i18nConfig';

// Local Dependencies
import { contentfulClient } from './contentfulClient';

/*
  Todo:
  - Use generics for 'data' type
  - Find better solution for dealing 'Contentful' locale data
*/
const getContentfulDataWithLocale = (data: any, locale?: string) => {
  const localeToUse = locale || defaultLocale;
  return data[localeToUse];
};

export const getContentfulEntries = async (contentType: string) => {
  const response = await contentfulClient.withAllLocales.getEntries({
    content_type: contentType,
  });

  return response.items;
};

export const getContentfulEntry = async (
  searchCriteria: EntriesQueries<EntrySkeletonType, undefined> | undefined,
) => {
  const response = await contentfulClient.withAllLocales.getEntries(searchCriteria);
  return response.items[0];
};

// Post
// Todo: Add type for 'postEntryData'
export const massagePostEntry = (postEntry: any, entryLocale: string) => {
  const { slug, title, coverImage, date, author, excerpt, content } = postEntry.fields;

  const { file: coverImageFile } = getContentfulDataWithLocale(coverImage)?.fields;

  const { name: authorName, picture: authorPicture } = getContentfulDataWithLocale(author)?.fields;
  const { file: authorPictureFile } = getContentfulDataWithLocale(authorPicture)?.fields;

  const massagedPostEntryData = {
    slug: getContentfulDataWithLocale(slug),
    title: getContentfulDataWithLocale(title, entryLocale),
    coverImage: { url: getContentfulDataWithLocale(coverImageFile).url },
    date: getContentfulDataWithLocale(date),
    author: {
      name: getContentfulDataWithLocale(authorName),
      picture: { url: getContentfulDataWithLocale(authorPictureFile).url },
    },
    excerpt: getContentfulDataWithLocale(excerpt, entryLocale),
    content: getContentfulDataWithLocale(content, entryLocale),
  };

  return massagedPostEntryData;
};

export const getPosts = (postEntries: any[], locale: string) => {
  return postEntries.map((postEntry: any) => massagePostEntry(postEntry, locale));
};

export const getPost = (postEntry: any, locale: string) => {
  return massagePostEntry(postEntry, locale);
};
