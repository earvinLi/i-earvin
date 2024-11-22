'use client';

// External Dependencies
import Image from "next/image";

// Local Variables
const imageLoader = ({ src, width, quality }: OptimizedImageProps) => `${src}?w=${width}&q=${quality || 75}`;

type OptimizedImageProps = {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any; // For other props that might be passed
}

// Component Definition
export default function OptimizedImage(props: OptimizedImageProps) {
  const { alt } = props;

  return (
    <Image
      alt={alt}
      loader={imageLoader}
      {...props}
    />
  );
}
