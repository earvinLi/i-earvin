/* eslint-disable react/require-default-props */

'use client';

// External Dependencies
import { ReactNode as TypeReactNode } from 'react';

// Local Dependencies
import iconButtonStyles from './iconButtonStyles';

// Local Variables
const {
  IconButtonBaseStyle,
} = iconButtonStyles;

type IconButtonProps = {
  icon: TypeReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

// Todo: design different sizes for the icon button
// Component Definition
export default function IconButton(props: IconButtonProps) {
  const { icon, onClick = undefined, disabled = false } = props;

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      // Todo: find better ways to deal with long classnames
      className={IconButtonBaseStyle}
    >
      {icon}
    </button>
  );
}
