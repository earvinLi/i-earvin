'use client';

// External Dependencies
import { ReactNode as TypeReactNode } from 'react';

// Internal Dependencies
import Tooltip from '@/components/base/Tooltip';

type IconButtonProps = {
  icon: TypeReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left';
};

// Todo: design different sizes for the icon button
// Component Definition
export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    onClick = undefined,
    disabled = false,
    tooltip = '',
    tooltipPosition = 'bottom',
  } = props;

  const renderIconButton = () => (
    <button
      disabled={disabled}
      type='button'
      onClick={onClick}
      // Todo: find better ways to deal with long classnames
      className='flex h-[42px] w-[42px] cursor-pointer flex-row items-center justify-center rounded-full border border-transparent p-2 transition-all hover:bg-slate-100 focus-visible:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
    >
      {icon}
    </button>
  );

  return tooltip && !disabled ? (
    <Tooltip content={tooltip} position={tooltipPosition}>
      {renderIconButton()}
    </Tooltip>
  ) : (
    renderIconButton()
  );
}
