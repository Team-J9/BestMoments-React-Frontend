import React, { ImgHTMLAttributes } from 'react';

const Image = ({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  loading = 'eager',
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      loading={loading}
      {...props}
    />
  );
};

export default Image;
