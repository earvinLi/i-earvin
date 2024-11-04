'use client';

import Image from "next/image";

type OptimizedImageProps = {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any; // For other props that might be passed
}

const imageLoader = ({ src, width, quality }: OptimizedImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function OptimizedImage(props: OptimizedImageProps) {
  const { alt } = props;

  return (
    <Image
      alt={alt}
      loader={imageLoader}
      {...props}
    />
  );
}

export default OptimizedImage;
