'use client';

// External Dependencies
import { useForm } from 'react-hook-form';

const useContactMeForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      contactInfo: 'earvin',
      contactMessage: '<p>This is a <em>great</em> <strong>message</strong>!</p>',
    },
  });

  return {
    contactMeFormHandleSubmit: handleSubmit,
    contactMeFormControl: control,
    contactMeFormReset: reset,
  };
};

export default useContactMeForm;
