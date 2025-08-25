'use client';

// Local Dependencies
import Modal from './index';
import Button from '../Button';

// Fixture Definition
const ModalFixture = () => (
  <Modal
    isOpen={true}
    onClose={() => {}}
    title='A good modal'
    description='This is a very good modal.'
    action={
      <>
        <Button onClick={() => {}}>Cancel</Button>
        <Button disabled={false} onClick={() => {}}>
          Submit
        </Button>
      </>
    }
    size='medium'
  >
    <div>These are the contents of this very good modal.</div>
  </Modal>
);

export default ModalFixture;
