/* eslint-disable react/require-default-props */

'use client';

// External Dependencies
import { ReactNode as TypeReactNode } from 'react';

// Internal Dependencies
import Tooltip from '@/components/base/Tooltip';

// Local Dependencies
import iconButtonStyles from './iconButtonStyles';

// Local Variables
const { IconButtonBaseStyle } = iconButtonStyles;

type IconButtonProps = {
  icon: TypeReactNode;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
};

// Todo: design different sizes for the icon button
// Component Definition
export default function IconButton(props: IconButtonProps) {
  const { icon, onClick = undefined, disabled = false, tooltip = '' } = props;

  const renderIconButton = () => (
    <button
      disabled={disabled}
      type='button'
      onClick={onClick}
      // Todo: find better ways to deal with long classnames
      className={IconButtonBaseStyle}
    >
      {icon}
    </button>
  );

  return tooltip && !disabled ? (
    <Tooltip content={tooltip}>{renderIconButton()}</Tooltip>
  ) : (
    renderIconButton()
  );
}
