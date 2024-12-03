// External Dependencies
import { createClient, EntriesQueries, EntrySkeletonType } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const contentfulPreviewClient = createClient({
  host: "preview.contentful.com",
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

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
