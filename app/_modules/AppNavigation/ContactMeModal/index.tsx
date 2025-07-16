'use client';

// External Dependencies
import { Controller } from 'react-hook-form';

// Internal Dependencies
import Button from '@/components/base/Button';
import Modal from '@/components/base/Modal';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useContactMeForm from '@/hooks/project/useContactMeForm';
import {
  createContactMeMessage,
  DataToCreateContactMeMessageTypes,
} from '@/actions/contactMeActions';
import { useT } from '@/utilities/i18nUtils/i18nClientHelpers';

type ContactMeModalProps = {
  isContactMeModalOpen: boolean;
  setIsContactMeModalOpen: (value: boolean) => void;
};

// Component Definition
export default function ContactMeModal(props: ContactMeModalProps) {
  const { isContactMeModalOpen, setIsContactMeModalOpen } = props;

  const { t } = useT('module_contact_me_modal');

  const {
    contactMeFormHandleSubmit,
    contactMeFormControl,
    contactMeFormReset,
  } = useContactMeForm();

  const handleCreateContactMeMessage = async (
    dataToCreateContactMeMessage: DataToCreateContactMeMessageTypes,
  ) => {
    await createContactMeMessage(dataToCreateContactMeMessage);
    contactMeFormReset();
    setIsContactMeModalOpen(false);
  };

  return (
    <Modal
      isOpen={isContactMeModalOpen}
      onClose={() => setIsContactMeModalOpen(false)}
      title={t('contact_me_title')}
      description={t('contact_me_description')}
      action={
        <>
          <Button onClick={() => setIsContactMeModalOpen(false)}>
            {t('contact_me_button_cancel_text')}
          </Button>
          <Button
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
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label={t('contact_me_input_info_label')}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name='contactMessage'
          control={contactMeFormControl}
          rules={{ required: true }}
          render={({ field }) => (
            <TiptapEditor
              label={t('contact_me_input_message_label')}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </Modal>
  );
}
