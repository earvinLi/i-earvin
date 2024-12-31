/* eslint-disable @typescript-eslint/no-explicit-any */

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

// Component Definition
export default function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    title,
    children,
  } = props;

  const handleModalClose = (event: any) => {
    if (event.target === event.currentTarget) onClose();
  }

  if (!isOpen) return null;

  return (
    <div
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
      onClick={handleModalClose}
      // Todo: find better solution for accessibility here
      onKeyDown={handleModalClose}
      role="button"
      tabIndex={0}
    >
      <div
        className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
      >
        <div className="px-4 py-2 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}