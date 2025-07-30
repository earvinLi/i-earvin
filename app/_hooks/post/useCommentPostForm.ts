'use client';

// External Dependencies
import { useForm } from 'react-hook-form';

const useCommentPostForm = (postId: string) => {
  const { handleSubmit, control, reset, getValues, getFieldState } = useForm({
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
  };
};

export default useCommentPostForm;
