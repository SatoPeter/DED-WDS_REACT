import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';

export interface ImageProps {
  src: string;
  alt: string;
  ratio: '1x1' | '4x3' | '5x4' | '16x9';
  objectFit: 'cover' | 'contain' | 'fill' | 'none';
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ratio,
  objectFit,
  className = '',
}) => {
  const [containerClass, setContainerClass] = useState('');
  const [imageClass, setImageClass] = useState('');

  useEffect(() => {
    setContainerClass(
      cva('ded-image-cover-container', {
        variants: {
          ratio: {
            '1x1': 'ratio-1x1',
            '4x3': 'ratio-4x3',
            '5x4': 'ratio-5x4',
            '16x9': 'ratio-16x9',
          },
        },
      })({
        ratio,
      })
    );
  }, [ratio]);

  useEffect(() => {
    setImageClass(
      cva('ded-image-cover', {
        variants: {
          objectFit: {
            cover: 'cover',
            contain: 'contain',
            fill: 'fill',
            none: 'none',
          },
        },
      })({
        objectFit,
      })
    );
  }, [objectFit]);

  return (
    <div className={`${containerClass} ${className}`}>
      <img className={imageClass} src={src} alt={alt} />
    </div>
  );
};
export default Image;
