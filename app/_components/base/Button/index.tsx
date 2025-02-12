/* eslint-disable react/require-default-props */

// External Dependencies
import classNames from 'classnames';

// Local Dependencies
import buttonStyles from './buttonStyles';

// Local Variables
const {
  Button_baseStyle,
  Button_variantTextStyle,
  Button_variantOutlinedStyle,
  Button_variantContainedtyle,
} = buttonStyles;

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'text' | 'contained' | 'outlined';
}

// Component Definition
export default function Button(props: ButtonProps) {
  const { children, onClick, variant } = props;

  // Todo: find better solutions for variant styles here especially considering other style variants like color, size, etc.
  let buttonVariantStyle;
  switch (variant) {
    case 'text': buttonVariantStyle = Button_variantTextStyle; break;
    case 'outlined': buttonVariantStyle = Button_variantOutlinedStyle; break;
    case 'contained': buttonVariantStyle = Button_variantContainedtyle; break;
    default: buttonVariantStyle = Button_variantTextStyle;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(Button_baseStyle, buttonVariantStyle)}
    >
      {children}
    </button>
  );
}
