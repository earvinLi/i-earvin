/* eslint-disable react/require-default-props */

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
}

// Component Definition
export default function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-md
        border
        border-slate-300
        py-2
        px-4
        text-center
        text-sm
        transition-all
        shadow-sm
        text-slate-600
        hover:bg-slate-50
        hover:border-slate-400
        focus:bg-slate-50
        focus:border-slate-400
        active:bg-slate-50
        active:border-slate-400
        disabled:pointer-events-none
        disabled:opacity-50
        disabled:shadow-none
      "
    >
      {children}
    </button>
  );
}
