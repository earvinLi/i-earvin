'use client';

// External Dependencies
import { useForm } from 'react-hook-form';

const useContactMeForm = () => {
  const { handleSubmit, control, reset, getValues, getFieldState } = useForm({
    defaultValues: {
      contactInfo: 'earvin.tli@gmail.com',
      contactMessage: '<p>This is a <em>great</em> <strong>message</strong>!</p>',
    },
  });

  return {
    contactMeFormHandleSubmit: handleSubmit,
    contactMeFormControl: control,
    contactMeFormReset: reset,
    contactMeFormGetValues: getValues,
    contactMeFormGetFieldState: getFieldState,
  };
};

export default useContactMeForm;
