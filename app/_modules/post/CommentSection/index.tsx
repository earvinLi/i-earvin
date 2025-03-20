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
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useCommentPostForm from '@/hooks/post/useCommentPostForm';
import { createPostComment, DataToCreatePostCommentTypes } from '@/actions/comentPostActions';
import IconButton from "@/components/base/IconButton";

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
  } = useCommentPostForm(postId);

  const [isEditingCommerter, setIsEditingCommerter] = useState(false);

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
        <Avatar
          name="John Doe"
          image="/avatar_default.jpg"
          size="medium"
        />
        {
          isEditingCommerter ? (
            <div className="flex flex-row gap-4 items-center w-[256px]">
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
              <IconButton
                icon={<SaveIcon color="gray" size={18} />}
                onClick={() => setIsEditingCommerter(false)}
              />
            </div>
          ) : (
            <div className="flex flex-row gap-3 items-center w-[196px]">
              <div className="text-slate-700 text-lg">
                {commentPostFormGetValues('commenter')}
              </div>
              <IconButton
                icon={<PencilIcon color="gray" size={18} />}
                onClick={() => setIsEditingCommerter(true)}
              />
            </div>
          )
        }
      </div>
      <Controller
        name="commentContent"
        control={commentPostFormControl}
        rules={{ required: true }}
        render={({ field }) => (
          <TiptapEditor
            value={field.value}
            onChange={field.onChange}
            toolbarActions={['bold', 'italic', 'bulletList', 'orderedList', 'undo', 'redo']}
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
          {postComments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
        </div>
      )}
    </div>
  );
}
