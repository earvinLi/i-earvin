'use client';

// External Dependencies
import { Controller } from 'react-hook-form';
import { PostComment as PostCommentTypes } from '@prisma/client';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import Button from '@/components/base/Button';
import CommentItem from '@/components/comment/CommentItem';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useCommentPostForm from '@/hooks/post/useCommentPostForm';
import { createPostComment, DataToCreatePostCommentTypes } from '@/actions/comentPostActions';

type CommentSectionProps = {
  postId: string;
  postComments: PostCommentTypes[];
};

// Component Definition
export default function CommentSection(props: CommentSectionProps) {
  const { postId, postComments } = props;

  const {
    commentPostFormHandleSubmit,
    commentPostFormControl,
    commentPostFormReset,
  } = useCommentPostForm(postId);

  const handleCreatePostComment = async (
    dataToCreatePostComment: DataToCreatePostCommentTypes,
  ) => {
    await createPostComment(dataToCreatePostComment);
    commentPostFormReset();
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">
        {`Comment${postComments.length > 1 ? 's' : ''} ${postComments.length > 0 ? `(${postComments.length})` : ''}`}
      </h2>
      <div className="flex gap-5 items-center">
        <Avatar
          name="John Doe"
          image="/avatar_default.jpg"
          size="medium"
        />
        <div className="w-[196px]">
          <Controller
            name="commenter"
            control={commentPostFormControl}
            rules={{ maxLength: 20 }}
            render={({ field }) => (
              <TextInput
                label="Commenter"
                value={field.value as string}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>
      <Controller
        name="commentContent"
        control={commentPostFormControl}
        rules={{ required: true }}
        render={({ field }) => (
          <TiptapEditor
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <div className="flex flex-row justify-end">
        <Button onClick={commentPostFormHandleSubmit(handleCreatePostComment)}>Submit</Button>
      </div>
      {postComments && (
        <div className="flex flex-col gap-4">
          {postComments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
        </div>
      )}
    </div>
  );
}
