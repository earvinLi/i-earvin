type TextInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Component Definition
export default function TextInput(props: TextInputProps) {
  const {
    label,
    value,
    onChange,
  } = props;

  return (
    <div className="w-full">
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          // This is to fulfill proper label and border styles when input is not empty
          placeholder=" "
          className="
            peer
            w-full
            bg-transparent
            text-slate-700
            text-sm
            border-b-2
            border-gray-300
            py-2
            transition
            duration-300
            ease
            focus:outline-none
            focus:border-[#00A3DA]
            hover:border-gray-400
          "
        />
        <label
          className="
            absolute
            cursor-text
            bg-white
            left-0
            top-2.5
            text-gray-400
            text-sm
            transition-all
            transform
            origin-left
            peer-focus:-top-2
            peer-focus:text-xs
            peer-focus:text-[#00A3DA]
            peer-focus:scale-90
            peer-[:not(:placeholder-shown)]:-top-2
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:text-gray-400
            peer-[:not(:placeholder-shown)]:scale-90
          "
        >
          {label}
        </label>
      </div>
    </div>
  );
}
