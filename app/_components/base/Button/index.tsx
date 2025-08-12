// External Dependencies
import { twJoin } from 'tailwind-merge';

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
  disabled?: boolean;
};

// Component Definition
export default function Button(props: ButtonProps) {
  const { children, onClick = undefined, variant = 'text', disabled = false } = props;

  // Todo: find better solutions for dynamic styles here considering variants like color, size, etc.
  let buttonVariantStyle;
  switch (variant) {
    case 'text':
      buttonVariantStyle = ButtonVariantTextStyle;
      break;
    case 'outlined':
      buttonVariantStyle = ButtonVariantOutlinedStyle;
      break;
    case 'contained':
      buttonVariantStyle = ButtonVariantContainedStyle;
      break;
    default:
      buttonVariantStyle = ButtonVariantTextStyle;
  }

  return (
    <button
      disabled={disabled}
      type='button'
      onClick={onClick}
      className={twJoin(ButtonBaseStyle, buttonVariantStyle)}
    >
      {children}
    </button>
  );
}
