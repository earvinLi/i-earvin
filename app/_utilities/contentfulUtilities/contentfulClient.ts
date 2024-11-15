import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const contentfulPreviewClient = contentful.createClient({
  host: "preview.contentful.com",
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getContentfulEntries = async (contentType: string) => {
  const response = await contentfulClient.getEntries({ content_type: contentType });
  return response.items;
};

export const getContentfulEntry = async (searchCriteria) => {
  const response = await contentfulClient.getEntries(searchCriteria);
  return response.items[0];
};
