'use client';

// External Dependencies
import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { PostComment as PostCommentTypes } from '@prisma/client';
import { Pencil as PencilIcon, Save as SaveIcon } from 'lucide-react';

// Internal Dependencies
import Avatar from '@/components/base/Avatar';
import Button from '@/components/base/Button';
import IconButton from '@/components/base/IconButton';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useCommentPostForm, { CommentPostFormData } from '@/hooks/post/useCommentPostForm';
import { createPostComment } from '@/actions/comentPostActions';
import { useT } from '@/utils/i18nUtils/i18nClientHelpers';

// Local Dependencies
import CommentItem from './CommentItem';

type CommentSectionProps = {
  postId: string;
  postComments: PostCommentTypes[];
};

// Component Definition
export default function CommentSection(props: CommentSectionProps) {
  const { postId, postComments } = props;

  const [isEditingCommenter, setIsEditingCommenter] = useState(false);
  const [isCreatingPostComment, setIsCreatingPostComment] = useState(false);

  const { t, i18n } = useT('module_comment_section');

  const {
    commentPostFormHandleSubmit,
    commentPostFormControl,
    commentPostFormReset,
    commentPostFormGetValues,
    commentPostFormGetFieldState,
  } = useCommentPostForm(t);

  // used to localize 'commenter' and 'commentContent' default values
  useEffect(() => {
    commentPostFormReset({
      commenter: t('edit_commenter_default_value'),
      commentContent: t('edit_comment_content_default_value'),
    });
  }, [i18n.resolvedLanguage, commentPostFormReset, t]);

  const handleSaveCommenter = () => {
    const commenter = commentPostFormGetValues('commenter');
    const commenterFieldError = commentPostFormGetFieldState('commenter')?.error;

    if (commenter !== '' && commenterFieldError === undefined) {
      setIsEditingCommenter(false);
    }
  };

  // here do not call 'commentPostFormReset' on purpose in order to keep user's edited comment
  const handleCreatePostComment = async (dataToCreatePostComment: CommentPostFormData) => {
    setIsCreatingPostComment(true);
    await createPostComment({ ...dataToCreatePostComment, postId });
    setIsCreatingPostComment(false);
  };

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-xl font-bold'>{t('comment_title', { count: postComments.length })}</h2>
      <div className='flex flex-row items-center gap-6'>
        <Avatar name='John Doe' image='/images/avatar/avatar_default.jpg' size='medium' />
        {isEditingCommenter ? (
          <div className='flex w-[256px] flex-row items-center gap-4'>
            <Controller
              name='commenter'
              control={commentPostFormControl}
              render={({ field, fieldState }) => (
                <TextInput
                  label={t('commenter_input_label_text')}
                  value={field.value}
                  onChange={field.onChange}
                  inputState={fieldState.error ? 'error' : 'default'}
                  helperText={fieldState.error ? fieldState.error.message : ''}
                />
              )}
            />
            <IconButton
              disabled={commentPostFormGetFieldState('commenter')?.error !== undefined}
              icon={<SaveIcon color='gray' size={18} />}
              onClick={handleSaveCommenter}
              tooltip={t('save_commenter_button_text')}
              tooltipPosition='right'
            />
          </div>
        ) : (
          <div className='flex w-[196px] flex-row items-center gap-3'>
            <div className='text-lg text-slate-700'>{commentPostFormGetValues('commenter')}</div>
            <IconButton
              icon={<PencilIcon color='gray' size={18} />}
              onClick={() => setIsEditingCommenter(true)}
              tooltip={t('edit_commenter_button_text')}
              tooltipPosition='right'
            />
          </div>
        )}
      </div>
      <Controller
        name='commentContent'
        control={commentPostFormControl}
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <TiptapEditor
            value={field.value}
            onChange={field.onChange}
            inputState={fieldState.error ? 'error' : 'default'}
            helperText={fieldState.error ? fieldState.error.message : ''}
            toolbarActions={['bold', 'italic', 'bulletList', 'orderedList', 'undo', 'redo']}
          />
        )}
      />
      <div className='flex flex-row justify-end'>
        <Button
          disabled={isCreatingPostComment}
          onClick={commentPostFormHandleSubmit(handleCreatePostComment)}
          variant='contained'
        >
          {t('submit_comment_button_text')}
        </Button>
      </div>
      {postComments && (
        <div className='flex flex-col gap-4'>
          {postComments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
