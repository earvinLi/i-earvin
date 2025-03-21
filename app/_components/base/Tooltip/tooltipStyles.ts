const tooltipStyles = {
  TooltipBaseStyle: `
    absolute
    left-1/2
    -translate-x-1/2
    bottom-full
    mb-2
    hidden
    group-hover:block
    w-max
    bg-[#757575]
    text-white
    text-xs
    rounded
    px-2
    py-1
  `,
  TooltipArrowStyle: `
    absolute
    left-1/2
    -translate-x-1/2
    top-full
    h-0
    w-0
    border-l-4
    border-r-4
    border-t-4
    border-l-transparent
    border-r-transparent
    border-t-[#757575]
  `,
};

export default tooltipStyles;
