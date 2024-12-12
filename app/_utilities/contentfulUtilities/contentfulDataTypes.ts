/* eslint-disable max-len */

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
export type TypeAuthorFields = {
  name: EntryFieldTypes.Symbol;
  picture: EntryFieldTypes.AssetLink;
}
export type TypeAuthorSkeleton = EntrySkeletonType<TypeAuthorFields, "author">;
export type TypeAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAuthorSkeleton, Modifiers, Locales>;

// Post
export type TypePostFields = {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.RichText;
  notes?: EntryFieldTypes.RichText;
  excerpt: EntryFieldTypes.Symbol;
  coverImage: EntryFieldTypes.AssetLink;
  date: EntryFieldTypes.Date;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
}
export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;

export type TypeMassagedPost = {
  slug: string;
  title: string;
  coverImage: { url: string };
  date: string;
  author: {
    name: string;
    picture: { url: string };
  },
  excerpt: string;
  content: Document;
};
