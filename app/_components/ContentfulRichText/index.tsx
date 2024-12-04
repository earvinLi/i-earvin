// External Dependencies
import { ReactNode as TypeReactNode } from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  BLOCKS,
  INLINES,
  MARKS,
  Document as TypeDocument,
} from '@contentful/rich-text-types';

// Internal Dependencies
import OptimizedImage from '@/components/OptimizedImage';

// Local Dependencies
import {
  TypeParagraph,
  TypeMark,
  TypeEntryHyperlink,
  TypeHyperlink,
  TypeEmbeddedEntry,
  TypeEmbeddedAsset,
} from './contentfulRichTextTypes';

// Type Definitions
type ContentfulRichTextProps = {
  content: TypeDocument;
}

// Local Variables
const options = {
  renderMark: {
    [MARKS.CODE]: (code: string) => (
      <pre>
        <code>{code}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: TypeParagraph, children: TypeReactNode) => {
      const { content } = node;

      if (content.find((item) => item.marks?.find((mark: TypeMark) => mark.type === 'code'))) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p className="mb-4">{children}</p>;
    },
    [BLOCKS.HR]: () => <hr className="mb-4" />,
    [INLINES.ENTRY_HYPERLINK]: (node: TypeEntryHyperlink) => {
      const { data } = node;

      if (data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${data.target.fields.slug}`}>
            {data.target.fields.title}
          </Link>
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node: TypeHyperlink) => {
      const { content, data } = node;
      const text = content.find((item) => item.nodeType === 'text')?.value;
      return (
        <a href={data.uri} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: TypeEmbeddedEntry) => {
      const { data } = node;

      if (data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height="400"
            width="100%"
            src={data.target.fields.embedUrl}
            title={data.target.fields.title}
            allowFullScreen
          />
        );
      }

      return null;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: TypeEmbeddedAsset) => {
      const { data } = node;
      const assetWidth = data.target.fields.file.details.image.width;
      const assetHeight = data.target.fields.file.details.image.height;

      return (
        <div className={`w-[${assetWidth}px] h-[${assetHeight}px]`}>
          <OptimizedImage
            alt={`Cover image for ${data.target.fields.title}`}
            src={data.target.fields.file.url}
            width={assetWidth}
            height={assetHeight}
            className="object-cover w-full h-full"
          />
        </div>
      );
    },
  },
};

// Component Definition
export default function ContentfulRichText(props: ContentfulRichTextProps) {
  const { content } = props;

  return documentToReactComponents(content, options);
}
