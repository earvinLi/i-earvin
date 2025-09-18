// External Dependencies
import { twJoin } from 'tailwind-merge';

// Style variables
const textInputStateStyles = {
  default: {
    input: 'border-gray-300 hover:border-gray-400 focus:border-[#00A3DA]',
    label: 'text-gray-400 peer-focus:text-[#00A3DA]',
  },
  error: {
    input: 'border-red-400 hover:border-red-500 focus:border-red-500',
    label: 'text-red-500 peer-focus:text-red-500',
  },
};

// Type Definitions
type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputState?: 'default' | 'error';
  helperText?: string;
};

// Component Definition
export default function TextInput(props: TextInputProps) {
  const { label, value, onChange, inputState = 'default', helperText = '' } = props;

  return (
    <div className='flex w-full flex-col gap-1'>
      <div className='relative'>
        <input
          id='text-input-input'
          value={value}
          onChange={onChange}
          // this is to fulfill proper label and border styles when input is not empty
          placeholder=' '
          className={twJoin(
            'peer ease w-full border-b-2 bg-transparent pt-3 text-lg text-slate-700 transition duration-300 focus:outline-none',
            textInputStateStyles[inputState].input,
          )}
        />
        <label
          htmlFor='text-input-input'
          className={twJoin(
            'absolute top-2.5 left-0 origin-left transform cursor-text bg-white text-lg transition-all peer-focus:-top-2 peer-focus:scale-x-90 peer-focus:text-base peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:scale-x-90 peer-[:not(:placeholder-shown)]:text-base',
            textInputStateStyles[inputState].label,
          )}
        >
          {label}
        </label>
      </div>
      {inputState === 'error' && helperText && (
        <div className='text-sm text-red-500'>{helperText}</div>
      )}
    </div>
  );
}
