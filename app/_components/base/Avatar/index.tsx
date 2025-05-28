// Internal Dependencies
import OptimizedImage from '@/components/OptimizedImage';

// Local Variables
// Todo: find even better solution to deal with dynamic class names (library or so)
const avatarStyles = {
  size: {
    small: 'w-[24px] h-[24px]',
    medium: 'w-[36px] h-[36px]',
    large: 'w-[48px] h-[48px]',
  },
};

type AvatarProps = {
  name: string;
  image: string;
  size: 'small' | 'medium' | 'large';
};

// Component Definition
export default function Avatar(props: AvatarProps) {
  const { name, image, size } = props;

  let imageWidth;
  let imageHeight;
  switch (size) {
    case 'small':
      imageWidth = 24;
      imageHeight = 24;
      break;
    case 'medium':
      imageWidth = 36;
      imageHeight = 36;
      break;
    case 'large':
      imageWidth = 48;
      imageHeight = 48;
      break;
    default:
      imageWidth = 48;
      imageHeight = 48;
      break;
  }

  return (
    <div className={avatarStyles.size[size]}>
      <OptimizedImage
        alt={`Avatar of ${name}`}
        src={image}
        width={imageWidth}
        height={imageHeight}
        className='h-full rounded-full object-cover'
      />
    </div>
  );
}
