const buttonStyles = {
  Button_baseStyle: `
    rounded-md
    py-2
    px-4
    text-center
    text-base
    text-slate-600
    transition-all
    hover:bg-slate-50
    hover:border-slate-400
    focus:bg-slate-50
    focus:border-slate-400
    active:bg-slate-50
    active:border-slate-400
    disabled:pointer-events-none
    disabled:opacity-50
    disabled:shadow-none
  `,
  Button_variantTextStyle: `
    border
    border-transparent
    hover:border-transparent
    focus:border-transparent
    active:border-transparent
  `,
  Button_variantOutlinedStyle: `
    border
    border-slate-300
    shadow-sm
  `,
  Button_variantContainedtyle: `
    bg-[#00A3DA]
    text-white
    shadow-sm
  `,
};

export default buttonStyles;
