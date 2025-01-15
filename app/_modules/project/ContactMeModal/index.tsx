// External Dependencies
import { useState } from 'react';

// Internal Dependencies
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import TextInput from '@/components/base/TextInput';
import TiptapEditor from '@/components/TiptapEditor';

type ContactMeModalProps = {
  isContactMeModalOpen: boolean;
  setIsContactMeModalOpen: (value: boolean) => void;
}

// Component Definition
export default function ContactMeModal(props: ContactMeModalProps) {
  const { isContactMeModalOpen, setIsContactMeModalOpen } = props;

  const [contactMessage, setContactMessage] = useState('<p>Start typing here...</p>');

  return (
    <Modal
      isOpen={isContactMeModalOpen}
      onClose={() => setIsContactMeModalOpen(false)}
      title="Contact Me"
      description="Feel free to reach out to me for any inquiries or share ideas and discuss about my projects and posts or just to say hi!"
      action={(
        <>
          <Button onClick={() => setIsContactMeModalOpen(false)}>Close</Button>
          <Button onClick={() => console.log(contactMessage)}>Submit</Button>
        </>
      )}
      size="medium"
    >
      <div className='w-full flex flex-col gap-6'>
        <TextInput
          label="Contact info"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
        <TiptapEditor
          label="Contact message"
          value={contactMessage}
          onChange={(value: string) => setContactMessage(value)}
        />
      </div>
    </Modal>
  );
}
