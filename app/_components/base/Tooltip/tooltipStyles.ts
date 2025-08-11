const tooltipStyles = {
  TooltipBaseStyle: `
    absolute
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
  TooltipTopPositionStyle: `
    left-1/2
    -translate-x-1/2
    bottom-full
    mb-2
  `,
  TooltipRightPositionStyle: `
    top-1/2
    -translate-y-1/2
    left-full
    ml-2
  `,
  TooltipBottomPositionStyle: `
    left-1/2
    -translate-x-1/2
    top-full
    mt-2
  `,
  TooltipLeftPositionStyle: `
    top-1/2
    -translate-y-1/2
    right-full
    mr-2
  `,
  TooltipArrowStyle: `
    absolute
    h-0
    w-0
  `,
  TooltipArrowTopPositionStyle: `
    left-1/2
    -translate-x-1/2
    top-full
    border-l-4
    border-r-4
    border-t-4
    border-l-transparent
    border-r-transparent
    border-t-[#757575]
  `,
  TooltipArrowRightPositionStyle: `
    top-1/2
    -translate-y-1/2
    right-full
    border-t-4
    border-b-4
    border-r-4
    border-t-transparent
    border-b-transparent
    border-r-[#757575]
  `,
  TooltipArrowBottomPositionStyle: `
    left-1/2
    -translate-x-1/2
    bottom-full
    border-l-4
    border-r-4
    border-b-4
    border-l-transparent
    border-r-transparent
    border-b-[#757575]
  `,
  TooltipArrowLeftPositionStyle: `
    top-1/2
    -translate-y-1/2
    left-full
    border-t-4
    border-b-4
    border-l-4
    border-t-transparent
    border-b-transparent
    border-l-[#757575]
  `,
};

export default tooltipStyles;
