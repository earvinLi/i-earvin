import classNames from 'classnames';

import OptimizedImage from '@/components/OptimizedImage';

// Todo: find even better solution to deal with dynamic class names (library or so)
const avatarStyles = {
  size: {
    small: 'w-[24px] h-[24px]',
    medium: 'w-[36px] h-[36px]',
    large: 'w-[48px] h-[48px]',
  },
  font: {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl font-bold',
  },
};

type AvatarProps = {
  name: string;
  image: string;
  direction: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large';
}

function Avatar(props: AvatarProps) {
  const { name, image, direction, size } = props;

  const isVertial = direction === 'vertical';

  let imageWidth;
  let imageHeight;
  switch (size) {
    case 'small': imageWidth = 24; imageHeight = 24; break;
    case 'medium': imageWidth = 36; imageHeight = 36; break;
    case 'large': imageWidth = 48; imageHeight = 48; break;
    default: imageWidth = 48; imageHeight = 48; break;
  }

  return (
    <div className={classNames('flex', { ['flex-col']: isVertial }, 'items-center')}>
      <div
        className={classNames({ ['mr-4']: !isVertial, ['mb-4']: isVertial }, avatarStyles.size[size])}
      >
        <OptimizedImage
          alt={`Avatar of ${name}`}
          src={image}
          width={imageWidth}
          height={imageHeight}
          className="object-cover h-full rounded-full"
        />
      </div>
      <div className={avatarStyles.font[size]}>{name}</div>
    </div>
  );
}

export default Avatar;
