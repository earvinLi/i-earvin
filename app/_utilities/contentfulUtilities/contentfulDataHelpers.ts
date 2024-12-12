/* eslint-disable @typescript-eslint/no-explicit-any */

export const massagePostEntryData = (postEntryData: any) => {
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
