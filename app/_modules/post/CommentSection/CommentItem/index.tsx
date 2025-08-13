// External Dependencies
import { PostComment as PostCommentTypes } from '@prisma/client';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import FormattedDateClient from '@/components/FormattedDate/FormattedDateClient';

type CommentItemProps = {
  comment: PostCommentTypes;
};

// Component Definition
export default function CommentItem(props: CommentItemProps) {
  const { comment } = props;

  return (
    <div className='flex flex-col gap-5 border-t-2 border-gray-100 pt-8'>
      <div className='flex flex-row items-center gap-5'>
        <Avatar
          name={comment.commenter as string}
          image='/images/avatar_default.jpg'
          size='medium'
        />
        <div className='flex flex-col gap-1'>
          <p>{comment.commenter}</p>
          <div className='text-sm'>
            <FormattedDateClient dateString={comment.createdAt.toISOString()} />
          </div>
        </div>
      </div>
      {/* Todo: find better solution(s) to deal with HTML content */}
      <div dangerouslySetInnerHTML={{ __html: comment.commentContent }} />
    </div>
  );
}
