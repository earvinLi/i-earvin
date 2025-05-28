// Local Dependencies
import tooltipStyles from './tooltipStyles';

// Local Variables
const { TooltipBaseStyle, TooltipArrowStyle } = tooltipStyles;

type TooltipPropTypes = {
  children: React.ReactNode;
  content: string;
};

// Component Definition
export default function Tooltip(props: TooltipPropTypes) {
  const { children, content } = props;

  return (
    <div role='tooltip' className='group relative'>
      {children}
      <div className={TooltipBaseStyle}>
        {content}
        <div className={TooltipArrowStyle} />
      </div>
    </div>
  );
}
