const buttonStyles = {
  ButtonBaseStyle: `
    w-fit
    h-[40px]
    rounded-md
    py-2
    px-4
    text-center
    text-base
    text-slate-600
    transition-all
  `,
  ButtonVariantTextStyle: `
    text-[#03A9F4]
    hover:bg-slate-50
    hover:border-slate-400
    focus:bg-slate-50
    focus:border-slate-400
    active:bg-slate-50
    active:border-slate-400
    disabled:pointer-events-none
    disabled:text-[#616161]
    disabled:bg-transparent
    disabled:opacity-50
    disabled:shadow-none
  `,
  ButtonVariantOutlinedStyle: `
    border
    border-[#03A9F4]
    text-[#03A9F4]
    hover:bg-slate-50
    hover:border-[#039BE5]
    focus:bg-slate-50
    focus:border-[#039BE5]
    active:bg-slate-50
    active:border-[#039BE5]
    disabled:pointer-events-none
    disabled:text-[#616161]
    disabled:bg-transparent
    disabled:border-[#e0e0e0]
    disabled:opacity-50
    disabled:shadow-none
  `,
  ButtonVariantContainedStyle: `
    bg-[#03A9F4]
    text-white
    shadow-sm
    hover:bg-[#039BE5]
    hover:border-transparent
    focus:bg-[#039BE5]
    focus:border-transparent
    active:bg-[#039BE5]
    active:border-transparent
    disabled:pointer-events-none
    disabled:text-[#616161]
    disabled:bg-[#e0e0e0]
    disabled:opacity-50
    disabled:shadow-none
  `,
};

export default buttonStyles;
