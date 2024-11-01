import classNames from 'classnames';

import OptimizedImage from '@/components/OptimizedImage';

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
    case 'small': imageWidth = 12; imageHeight = 12; break;
    case 'medium': imageWidth = 24; imageHeight = 24; break;
    case 'large': imageWidth = 48; imageHeight = 48; break;
    default: imageWidth = 36; imageHeight = 36; break;
  }

  return (
    <div className={classNames('flex', { ['flex-col']: isVertial }, 'items-center')}>
      <div className={classNames({ ['mr-4']: !isVertial, ['mb-4']: isVertial }, `w-${imageWidth / 4} h-${imageHeight / 4}`)}>
        <OptimizedImage
          alt={`Avatar of ${name}`}
          src={image}
          width={imageWidth}
          height={imageHeight}
          className="object-cover h-full rounded-full"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}

export default Avatar;
