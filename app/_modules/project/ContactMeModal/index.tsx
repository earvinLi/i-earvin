// External Dependencies
import { Controller } from 'react-hook-form';

// Internal Dependencies
import Button from '@/components/base/Button';
import Modal from '@/components/Modal';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';
import useContactMeForm from '@/hooks/project/useContactMeForm';
import { createContactMeMessage, DataToCreateContactMeMessageTypes } from '@/actions/contactMeActions';

type ContactMeModalProps = {
  isContactMeModalOpen: boolean;
  setIsContactMeModalOpen: (value: boolean) => void;
}

// Component Definition
export default function ContactMeModal(props: ContactMeModalProps) {
  const { isContactMeModalOpen, setIsContactMeModalOpen } = props;

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
      title="Contact Me"
      description="Feel free to reach out to me for any inquiries or share ideas and discuss about my projects and posts or just to say hi!"
      action={(
        <>
          <Button onClick={() => setIsContactMeModalOpen(false)}>Close</Button>
          <Button onClick={contactMeFormHandleSubmit(handleCreateContactMeMessage)}>Submit</Button>
        </>
      )}
      size="medium"
    >
      <div className="w-full flex flex-col gap-6">
        <Controller
          name="contactInfo"
          control={contactMeFormControl}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Contact info"
              value={field.value as string}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="contactMessage"
          control={contactMeFormControl}
          rules={{ required: true }}
          render={({ field }) => (
            <TiptapEditor
              label="Contact message"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </Modal>
  );
}
