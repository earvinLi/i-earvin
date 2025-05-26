'use client';

// External Dependencies
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { PostComment as PostCommentTypes } from '@prisma/client';
import { Pencil as PencilIcon, Save as SaveIcon } from 'lucide-react';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import Button from '@/components/base/Button';
import CommentItem from '@/components/comment/CommentItem';
import IconButton from '@/components/base/IconButton';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useCommentPostForm from '@/hooks/post/useCommentPostForm';
import {
  createPostComment,
  DataToCreatePostCommentTypes,
} from '@/actions/comentPostActions';

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
    commentPostFormGetValues,
    commentPostFormGetFieldState,
  } = useCommentPostForm(postId);

  const [isEditingCommenter, setIsEditingCommenter] = useState(false);

  const handleSaveCommenter = () => {
    const commenter = commentPostFormGetValues('commenter');
    const commenterFieldError = commentPostFormGetFieldState('commenter')?.error;

    if (commenter !== '' && commenterFieldError === undefined) {
      setIsEditingCommenter(false);
    }
  };

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
      <div className="flex flex-row gap-6 items-center">
        <Avatar name="John Doe" image="/avatar_default.jpg" size="medium" />
        {isEditingCommenter ? (
          <div className="flex flex-row gap-4 items-center w-[256px]">
            <Controller
              name="commenter"
              control={commentPostFormControl}
              rules={{
                required: { value: true, message: 'Commenter is required' },
                maxLength: {
                  value: 20,
                  message: 'Commenter may not be longer than 20 characters',
                },
              }}
              render={({ field, fieldState }) => (
                <TextInput
                  label="Commenter"
                  value={field.value}
                  onChange={field.onChange}
                  inputState={fieldState.error ? 'error' : 'default'}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
            <IconButton
              disabled={
                commentPostFormGetFieldState('commenter')?.error !== undefined
              }
              icon={<SaveIcon color="gray" size={18} />}
              onClick={handleSaveCommenter}
              tooltip="Save"
            />
          </div>
        ) : (
          <div className="flex flex-row gap-3 items-center w-[196px]">
            <div className="text-slate-700 text-lg">
              {commentPostFormGetValues('commenter')}
            </div>
            <IconButton
              icon={<PencilIcon color="gray" size={18} />}
              onClick={() => setIsEditingCommenter(true)}
              tooltip="Edit"
            />
          </div>
        )}
      </div>
      <Controller
        name="commentContent"
        control={commentPostFormControl}
        rules={{ required: true }}
        render={({ field }) => (
          <TiptapEditor
            value={field.value}
            onChange={field.onChange}
            toolbarActions={[
              'bold',
              'italic',
              'bulletList',
              'orderedList',
              'undo',
              'redo',
            ]}
          />
        )}
      />
      <div className="flex flex-row justify-end">
        <Button
          onClick={commentPostFormHandleSubmit(handleCreatePostComment)}
          variant="contained"
        >
          Submit
        </Button>
      </div>
      {postComments && (
        <div className="flex flex-col gap-4">
          {postComments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
