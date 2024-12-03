'use client';

// External Dependencies
import Image from "next/image";

// Type Definitions
type TypeImageLoader = {
  src: string;
  width: number;
  quality?: number;
}

type OptimizedImageProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  // Todo: find better way to deal with the eslint rule
  quality?: number; // eslint-disable-line react/require-default-props
  className: string;
}

// Local Variables
const imageLoader = ({ src, width, quality }: TypeImageLoader) => `${src}?w=${width}&q=${quality || 75}`;

// Component Definition
export default function OptimizedImage(props: OptimizedImageProps) {
  const {
    alt,
    src,
    width,
    height,
    quality = 75,
    className,
  } = props;

  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      quality={quality}
      loader={imageLoader}
      className={className}
    />
  );
}
