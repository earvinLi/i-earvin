// External Dependencies
import classNames from 'classnames';

// Local Dependencies
import tooltipStyles from './tooltipStyles';

// Local Variables
const {
  TooltipBaseStyle,
  TooltipTopPositionStyle,
  TooltipRightPositionStyle,
  TooltipBottomPositionStyle,
  TooltipLeftPositionStyle,
  TooltipArrowStyle,
  TooltipArrowTopPositionStyle,
  TooltipArrowRightPositionStyle,
  TooltipArrowBottomPositionStyle,
  TooltipArrowLeftPositionStyle,
} = tooltipStyles;

const tooltipStyleData = {
  top: { tooltip: TooltipTopPositionStyle, arrow: TooltipArrowTopPositionStyle },
  right: { tooltip: TooltipRightPositionStyle, arrow: TooltipArrowRightPositionStyle },
  bottom: { tooltip: TooltipBottomPositionStyle, arrow: TooltipArrowBottomPositionStyle },
  left: { tooltip: TooltipLeftPositionStyle, arrow: TooltipArrowLeftPositionStyle },
};

type TooltipPropTypes = {
  children: React.ReactNode;
  content: string;
  position?: string;
};

// Component Definition
export default function Tooltip(props: TooltipPropTypes) {
  const { children, content, position = 'bottom' } = props;

  return (
    <div role='tooltip' className='group relative'>
      {children}
      <div
        className={classNames(
          TooltipBaseStyle,
          tooltipStyleData[position as keyof typeof tooltipStyleData].tooltip,
        )}
      >
        {content}
        <div
          className={classNames(
            TooltipArrowStyle,
            tooltipStyleData[position as keyof typeof tooltipStyleData].arrow,
          )}
        />
      </div>
    </div>
  );
}
