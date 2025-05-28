// Local Dependencies
import textInputStyles from './textInputStyles';

// Local Variables
const { TextInputInputBaseStyle, TextInputLabelBaseStyle } = textInputStyles;

type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputState?: 'default' | 'error';
  helperText?: string;
};

// Component Definition
export default function TextInput(props: TextInputProps) {
  const {
    label,
    value,
    onChange,
    inputState = 'default',
    helperText = '',
  } = props;

  return (
    <div className='flex w-full flex-col gap-1'>
      <div className='relative'>
        <input
          id='text-input-input'
          value={value}
          onChange={onChange}
          // This is to fulfill proper label and border styles when input is not empty
          placeholder=' '
          className={TextInputInputBaseStyle}
        />
        <label htmlFor='text-input-input' className={TextInputLabelBaseStyle}>
          {label}
        </label>
      </div>
      {inputState === 'error' && helperText && (
        <div className='text-sm text-red-500'>{helperText}</div>
      )}
    </div>
  );
}
