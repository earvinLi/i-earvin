'use client';

// External Dependencies
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TFunction } from 'i18next';

// Validation Variables
const buildCommentPostFormSchema = (translationHelper: TFunction) =>
  z.object({
    commenter: z
      .string()
      .min(1, translationHelper('edit_commenter_error_text_required'))
      .max(20, translationHelper('edit_commenter_error_text_length')),
    commentContent: z
      .string()
      .min(1, translationHelper('edit_comment_content_error_text_required')),
  });

const useCommentPostForm = (postId: string, translationHelper: TFunction) => {
  const { handleSubmit, control, reset, getValues, getFieldState, setValue } = useForm({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resolver: zodResolver(buildCommentPostFormSchema(translationHelper)),
    defaultValues: {
      postId,
      commenter: 'John Doe',
      commentContent: '<p>This is a <em>great</em> <strong>comment</strong>!</p>',
    },
  });

  return {
    commentPostFormHandleSubmit: handleSubmit,
    commentPostFormControl: control,
    commentPostFormReset: reset,
    commentPostFormGetValues: getValues,
    commentPostFormGetFieldState: getFieldState,
    commentPostFormSetValue: setValue,
  };
};

export default useCommentPostForm;
