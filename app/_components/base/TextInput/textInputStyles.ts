const textInputStyles = {
  TextInputInputBaseStyle: `
    peer
    w-full
    bg-transparent
    text-slate-700
    text-lg
    border-b-2
    border-gray-300
    pt-3
    transition
    duration-300
    ease
    focus:outline-none
    focus:border-[#00A3DA]
    hover:border-gray-400
  `,
  TextInputLabelBaseStyle: `
    absolute
    cursor-text
    bg-white
    left-0
    top-2.5
    text-gray-400
    text-lg
    transition-all
    transform
    origin-left
    peer-focus:-top-2
    peer-focus:text-base
    peer-focus:text-[#00A3DA]
    peer-focus:scale-x-90
    peer-[:not(:placeholder-shown)]:-top-2
    peer-[:not(:placeholder-shown)]:text-base
    peer-[:not(:placeholder-shown)]:scale-x-90
  `,
};

export default textInputStyles;
