// External Dependencies
import { twJoin } from 'tailwind-merge';

// Internal Dependencies
import OptimizedImage from '@/components/OptimizedImage';

// Local Variables
const avatarSizeStyles = {
  small: 'w-[24px] h-[24px]',
  medium: 'w-[36px] h-[36px]',
  large: 'w-[48px] h-[48px]',
};

type AvatarProps = {
  name: string;
  image: string;
  size: 'small' | 'medium' | 'large';
};

// Component Definition
export default function Avatar(props: AvatarProps) {
  const { name, image, size } = props;

  return (
    <div
      className={twJoin(
        'relative overflow-hidden rounded-full object-cover',
        avatarSizeStyles[size],
      )}
    >
      <OptimizedImage alt={`Avatar of ${name}`} src={image} fill />
    </div>
  );
}
