'use client';

// External Dependencies
import React from 'react';
import Image from 'next/image';

// Type Definitions
type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

type OptimizedImageProps = {
  alt: string;
  src: string;
  // Todo: whether we need 'width' and 'height' actually depends on if 'fill' if provided
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  className?: string;
};

// Local Variables
const ImageLoaderParams = ({ src, width, quality }: ImageLoaderParams) =>
  `${src}?w=${width}&q=${quality || 75}`;

// Component Definition
export default function OptimizedImage(props: OptimizedImageProps) {
  // Todo: should we have all props from 'NextJS Image'
  const {
    alt,
    src,
    width = 360,
    height = 360,
    fill = false,
    quality = 75,
    priority = false,
    className,
  } = props;

  const ImageBase = (
    <Image
      alt={alt}
      src={src}
      quality={quality}
      loader={ImageLoaderParams}
      priority={priority}
      className={className}
    />
  );

  if (fill) {
    return React.cloneElement(ImageBase, {
      fill,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    });
  }

  return React.cloneElement(ImageBase, { width, height });
}
