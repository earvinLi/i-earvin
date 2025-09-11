// External Dependencies
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Author
type ContentfulAuthorFields = {
  name: EntryFieldTypes.Symbol;
  picture: EntryFieldTypes.AssetLink;
};
type ContentfulAuthorSkeleton = EntrySkeletonType<ContentfulAuthorFields, 'author'>;
export type ContentfulAuthor<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<ContentfulAuthorSkeleton, Modifiers, Locales>;

// Post
type ContentfulPostFields = {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  notes?: EntryFieldTypes.RichText;
  excerpt: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  date: EntryFieldTypes.Date;
  author: EntryFieldTypes.EntryLink<ContentfulAuthorSkeleton>;
};
type ContentfulPostSkeleton = EntrySkeletonType<ContentfulPostFields, 'post'>;
export type ContentfulPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<ContentfulPostSkeleton, Modifiers, Locales>;

export type ContentfulMassagedPost = {
  slug: string;
  title: string;
  coverImage: { url: string };
  date: string;
  author: {
    name: string;
    picture: { url: string };
  };
  excerpt: string;
  content: Document;
};
