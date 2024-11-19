import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import OptimizedImage from '@/components/OptimizedImage';

type ContentfulRichTextProps = {
  content: any;
}

const options = {
  renderMark: {
    [MARKS.CODE]: (text: string) => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.find((item) => item.marks?.find((mark) => mark.type === 'code'))) {
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
    [BLOCKS.HR]: (node) => (
      <hr className="mb-4"/>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === 'text')?.value;
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const assetWidth = node.data.target.fields.file.details.image.width;
      const assetHeight = node.data.target.fields.file.details.image.height;

      return (
        <div className={`w-[${assetWidth}px] h-[${assetHeight}px]`}>
          <OptimizedImage
            alt={`Cover image for ${node.data.target.fields.title}`}
            src={node.data.target.fields.file.url}
            width={assetWidth}
            height={assetHeight}
            className="object-cover w-full h-full"
          />
        </div>
      );
    },
  },
};

export default function ContentfulRichText(props: ContentfulRichTextProps) {
  const { content } = props;

  return documentToReactComponents(content, options);
}
