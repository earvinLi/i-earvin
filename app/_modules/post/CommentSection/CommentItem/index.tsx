// External Dependencies
import { useState } from 'react';
import { PostComment as PostCommentTypes } from '@prisma/client';
import { Trash2 as Trash2Icon } from 'lucide-react';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import FormattedDateClient from '@/components/FormattedDate/FormattedDateClient';
import IconButton from '@/components/base/IconButton';
import { deletePostComment } from '@/actions/comentPostActions';

type CommentItemProps = {
  comment: PostCommentTypes;
};

// Component Definition
export default function CommentItem(props: CommentItemProps) {
  const { comment } = props;

  const [isDeletingPostComment, setIsDeletingPostComment] = useState(false);

  const handleDeleteComment = async () => {
    setIsDeletingPostComment(true);
    await deletePostComment({ postCommentId: comment.id, postId: comment.postId });
    setIsDeletingPostComment(false);
  };

  return (
    <div className='flex flex-col gap-5 border-t-2 border-gray-100 pt-8'>
      <div className='flex flex-row items-center gap-5'>
        <Avatar
          name={comment.commenter as string}
          image='/images/avatar/avatar_default.jpg'
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
      <div className='flex flex-row items-center gap-1'>
        <IconButton
          icon={<Trash2Icon color='gray' />}
          tooltip='Delete'
          tooltipPosition='left'
          onClick={handleDeleteComment}
          disabled={isDeletingPostComment}
        />
      </div>
    </div>
  );
}
