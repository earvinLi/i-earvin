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
          // This is to fulfill proper label and border styles when input is not empty
          placeholder=' '
          className='peer ease w-full border-b-2 border-gray-300 bg-transparent pt-3 text-lg text-slate-700 transition duration-300 hover:border-gray-400 focus:border-[#00A3DA] focus:outline-none'
        />
        <label
          htmlFor='text-input-input'
          className='absolute top-2.5 left-0 origin-left transform cursor-text bg-white text-lg text-gray-400 transition-all peer-focus:-top-2 peer-focus:scale-x-90 peer-focus:text-base peer-focus:text-[#00A3DA] peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:scale-x-90 peer-[:not(:placeholder-shown)]:text-base'
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
