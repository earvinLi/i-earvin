// External Dependencies
import { format } from 'date-fns';
import { PostComment as PostCommentTypes } from '@prisma/client';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';

type CommentItemProps = {
  comment: PostCommentTypes;
};

// Component Definition
export default function CommentItem(props: CommentItemProps) {
  const { comment } = props;

  return (
    <div className="flex flex-col gap-5 border-t-2 border-gray-100 pt-8">
      <div className="flex flex-row items-center gap-5">
        <Avatar
          name={comment.commenter as string}
          image="/profile_earvin.jpg"
          size="medium"
        />
        <div className="flex flex-col gap-1">
          <p>{comment.commenter}</p>
          <time dateTime={comment.createdAt.toISOString()} className="text-sm">
            {format(new Date(comment.createdAt), "LLL d, yyyy")}
          </time>
        </div>
      </div>
      <p>{comment.commentContent}</p>
    </div>
  );
}
