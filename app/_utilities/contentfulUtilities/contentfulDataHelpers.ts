// External Dependencies
import type { ChainModifiers, LocaleCode } from 'contentful';

// Local Dependencies
import { TypePost } from './contentfulDataTypes';

export const massagePostEntryData = (postEntryData: TypePost<ChainModifiers, LocaleCode>) => {
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
