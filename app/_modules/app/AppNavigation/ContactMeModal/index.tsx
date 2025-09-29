'use client';

// External Dependencies
import { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';

// Internal Dependencies
import Button from '@/components/base/Button';
import Modal from '@/components/base/Modal';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useContactMeForm from '@/hooks/app/useContactMeForm';
import { createContactMeMessage, DataToCreateContactMeMessage } from '@/actions/contactMeActions';
import { useT } from '@/utils/i18nUtils/i18nClientHelpers';

type ContactMeModalProps = {
  isContactMeModalOpen: boolean;
  setIsContactMeModalOpen: (value: boolean) => void;
};

// Component Definition
export default function ContactMeModal(props: ContactMeModalProps) {
  const { isContactMeModalOpen, setIsContactMeModalOpen } = props;

  const [isCreatingContactMeMessage, setIsCreatingContactMeMessage] = useState(false);

  const { t } = useT('module_contact_me_modal');

  const { contactMeFormHandleSubmit, contactMeFormControl, contactMeFormReset } =
    useContactMeForm(t);

  // used to localize 'contactInfo' and 'contactMessage' default values
  useEffect(() => {
    contactMeFormReset({
      contactInfo: t('contact_me_input_info_default_value'),
      contactMessage: t('contact_me_input_message_default_value'),
    });
  }, [isContactMeModalOpen, contactMeFormReset, t]);

  const handleCloseContactMeModal = () => setIsContactMeModalOpen(false);

  const handleCreateContactMeMessage = async (
    dataToCreateContactMeMessage: DataToCreateContactMeMessage,
  ) => {
    setIsCreatingContactMeMessage(true);
    await createContactMeMessage(dataToCreateContactMeMessage);
    setIsContactMeModalOpen(false);
    setIsCreatingContactMeMessage(false);
  };

  return (
    <Modal
      isOpen={isContactMeModalOpen}
      onClose={handleCloseContactMeModal}
      title={t('contact_me_title')}
      description={t('contact_me_description')}
      action={
        <>
          <Button onClick={handleCloseContactMeModal}>{t('contact_me_button_cancel_text')}</Button>
          <Button
            disabled={isCreatingContactMeMessage}
            onClick={contactMeFormHandleSubmit(handleCreateContactMeMessage)}
          >
            {t('contact_me_button_submit_text')}
          </Button>
        </>
      }
      size='medium'
    >
      <div className='flex w-full flex-col gap-6'>
        <Controller
          name='contactInfo'
          control={contactMeFormControl}
          render={({ field, fieldState }) => (
            <TextInput
              label={t('contact_me_input_info_label')}
              value={field.value}
              onChange={field.onChange}
              inputState={fieldState.error ? 'error' : 'default'}
              helperText={fieldState.error ? fieldState.error.message : ''}
            />
          )}
        />
        <Controller
          name='contactMessage'
          control={contactMeFormControl}
          render={({ field, fieldState }) => (
            <TiptapEditor
              label={t('contact_me_input_message_label')}
              value={field.value}
              onChange={field.onChange}
              inputState={fieldState.error ? 'error' : 'default'}
              helperText={fieldState.error ? fieldState.error.message : ''}
            />
          )}
        />
      </div>
    </Modal>
  );
}
