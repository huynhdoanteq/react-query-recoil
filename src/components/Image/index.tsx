import type { FC } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Image: FC<Props> = ({ src, alt, width, height, className, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={() => onClick && onClick()}
    />
  );
};

export default Image;
