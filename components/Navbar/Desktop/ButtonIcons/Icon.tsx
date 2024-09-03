import React from "react";
import Image from "next/image";

interface IconProps {
  source: string;
  width: number;
  height: number;
  alt: string;
  divW: string;
  divH: string;
}

const Icon: React.FC<IconProps> = ({
  source,
  width,
  height,
  alt,
  divW,
  divH,
}) => {
  return (
    <div
      style={{ width: divW, height: divH }}
      className="rounded-full bg-purpleHeart-50 flex items-center justify-center"
    >
      <Image
        src={source}
        width={width}
        height={height}
        alt={alt}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Icon;
