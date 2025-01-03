/*
  eslint-disable
  @typescript-eslint/no-explicit-any,
  jsx-a11y/no-noninteractive-element-interactions
*/

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
  action: React.ReactNode;
};

// Component Definition
export default function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    title,
    description,
    children,
    action,
  } = props;

  const handleModalClose = (event: any) => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      onClick={handleModalClose}
      onKeyDown={handleModalClose}
      // Todo: find better solution for accessibility here
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      className="
        fixed
        inset-0
        z-[999]
        h-screen
        w-screen
        flex
        items-center
        justify-center
        bg-black
        bg-opacity-60
      "
    >
      <div
        className="
          relative
          p-6
          w-1/2
          min-w-[50%]
          max-w-[50%]
          rounded-md
          bg-white
          shadow-sm
          flex
          flex-col
          gap-5
        "
      >
        <h2 id="modal-title" className="text-xl font-medium">{title}</h2>
        <h4 className="text-base text-gray-500">{description}</h4>
        <div>{children}</div>
        <div className="flex flex-row gap-4 justify-end">{action}</div>
      </div>
    </div>
  );
}
