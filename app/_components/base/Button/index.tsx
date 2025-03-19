/* eslint-disable react/require-default-props */

// External Dependencies
import classNames from 'classnames';

// Local Dependencies
import buttonStyles from './buttonStyles';

// Local Variables
const {
  ButtonBaseStyle,
  ButtonVariantTextStyle,
  ButtonVariantOutlinedStyle,
  ButtonVariantContainedStyle,
} = buttonStyles;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'text' | 'contained' | 'outlined';
}

// Component Definition
export default function Button(props: ButtonProps) {
  const { children, onClick = undefined, variant = 'text' } = props;

  // Todo: find better solutions for dynamic styles here considering variants like color, size, etc.
  let buttonVariantStyle;
  switch (variant) {
    case 'text': buttonVariantStyle = ButtonVariantTextStyle; break;
    case 'outlined': buttonVariantStyle = ButtonVariantOutlinedStyle; break;
    case 'contained': buttonVariantStyle = ButtonVariantContainedStyle; break;
    default: buttonVariantStyle = ButtonVariantTextStyle;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(ButtonBaseStyle, buttonVariantStyle)}
    >
      {children}
    </button>
  );
}
