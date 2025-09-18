'use client';

// External Dependencies
import { twJoin } from 'tailwind-merge';
import type { ReactNode, MouseEvent, KeyboardEvent } from 'react';

// Style Variables
const modalSizeStyles = {
  small: 'w-[320px]',
  medium: 'w-[640px]',
  large: 'w-[960px]',
};

// Type Definitions
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
  action: ReactNode;
  size: 'small' | 'medium' | 'large';
};

// Component Definition
export default function Modal(props: ModalProps) {
  const { isOpen, onClose, title, description, children, action, size } = props;

  const handleCloseModal = (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
    if (
      event.target === event.currentTarget ||
      (event as KeyboardEvent<HTMLDivElement>).key === 'Escape'
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleCloseModal}
      onKeyDown={handleCloseModal}
      // Todo: find better solution for accessibility here
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      tabIndex={-1}
      className='fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-black/60'
    >
      <div
        className={twJoin(
          `relative flex w-1/2 flex-col gap-5 rounded-md bg-white px-6 pt-6 pb-4 shadow-sm`,
          modalSizeStyles[size],
        )}
      >
        <h2 id='modal-title' className='text-xl font-medium'>
          {title}
        </h2>
        <h4 className='text-base text-gray-500'>{description}</h4>
        {children}
        <div className='flex flex-row justify-end gap-4'>{action}</div>
      </div>
    </div>
  );
}
