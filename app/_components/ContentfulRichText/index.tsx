/*
  eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-member-access,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-return
*/

// External Dependencies
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS, Document as TypeDocument } from '@contentful/rich-text-types';

// Internal Dependencies
import LinkClient from '@/components/Link/LinkClient';
import OptimizedImage from '@/components/OptimizedImage';

// Type Definitions
type ContentfulRichTextProps = {
  content: TypeDocument;
};

// Local Variables
const options = {
  renderMark: {
    [MARKS.CODE]: (code: any) => (
      <pre>
        <code>{code}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      const { content } = node;

      if (content.find((item: any) => item.marks?.find((mark: any) => mark.type === 'code'))) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p className='mb-4'>{children}</p>;
    },
    [BLOCKS.HR]: () => <hr className='mb-4' />,
    [INLINES.ENTRY_HYPERLINK]: (node: any) => {
      const { data } = node;

      if (data.target.sys.contentType.sys.id === 'post') {
        return (
          <LinkClient href={`/posts/${data.target.fields.slug}`}>
            {data.target.fields.title}
          </LinkClient>
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node: any) => {
      const { content, data } = node;
      const text = content.find((item: any) => item.nodeType === 'text')?.value;

      return (
        <a href={data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      const { data } = node;

      if (data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={data.target.fields.embedUrl}
            title={data.target.fields.title}
            allowFullScreen
          />
        );
      }

      return null;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { data } = node;
      const assetWidth = data.target.fields.file.details.image.width;
      const assetHeight = data.target.fields.file.details.image.height;

      return (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className={`w-[${assetWidth}px] h-[${assetHeight}px]`}>
          <OptimizedImage
            alt={`Cover image for ${data.target.fields.title}`}
            src={data.target.fields.file.url}
            width={assetWidth}
            height={assetHeight}
            className='size-full object-cover'
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
