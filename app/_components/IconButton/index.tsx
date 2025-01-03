/* eslint-disable react/require-default-props */

'use client';

// External Dependencies
import { ReactNode as TypeReactNode } from 'react';

type IconButtonProps = {
  icon: TypeReactNode;
  onClick: () => void;
  disabled?: boolean;
};

// Component Definition
export default function IconButton(props: IconButtonProps) {
  const { icon, onClick, disabled } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      // Todo: find better ways to deal with long classnames
      className="rounded-full border border-transparent p-2 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {icon}
    </button>
  );
}
