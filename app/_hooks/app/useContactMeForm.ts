'use client';

// External Dependencies
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TFunction } from 'i18next';

// Validation Variables
const buildContactMeFormSchema = (translationHelper: TFunction) =>
  z.object({
    contactInfo: z
      .string()
      .min(1, translationHelper('contact_me_input_info_error_text_required'))
      .max(20, translationHelper('contact_me_input_info_error_text_length')),
    contactMessage: z
      .string()
      .min(1, translationHelper('contact_me_input_message_error_text_required')),
  });

// type ContactMeFormInputType = z.infer<typeof ContactMeFormSchema>;

const useContactMeForm = (translationHelper: TFunction) => {
  const { handleSubmit, control, reset, getValues, getFieldState } = useForm({
    // Todo: find proper type declaration for `zodResolver`
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    resolver: zodResolver(buildContactMeFormSchema(translationHelper)),
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
