'use client';

// External Dependencies
import { ReactNode as TypeReactNode } from 'react';

type IconButtonProps = {
  icon: TypeReactNode;
  onClick: () => void;
};

// Component Definition
export default function IconButton(props: IconButtonProps) {
  const { icon, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      // Todo: find better ways to deal with long classnames
      className="rounded-full border border-transparent p-2 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {icon}
    </button>
  );
}
