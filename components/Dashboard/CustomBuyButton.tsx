import React from "react";
import Image from "next/image";

interface CustomButtonSize {
  buttonW: string;
  buttonH: string;
  imageSource: string;
  imageText: string;
  alt: string;
  backgrouundColor?: string;
}

const CustomBuyButton: React.FC<CustomButtonSize> = ({
  buttonW,
  buttonH,
  imageSource,
  imageText,
  alt,
  backgrouundColor,
}) => {
  return (
    <div className="cursor-pointer">
      <div
        className={`rounded-[60px] border-[1px] px-4 py-2 border-purpleHeart-950 items-center flex flex-row gap-1`}
        style={{
          width: buttonW,
          height: buttonH,
          background: backgrouundColor,
        }}
      >
        <Image src={imageSource} width={15} height={15} alt={alt} />
        <p className="font-poppins font-normal text-[14px] text-purpleHeart-950">
          {imageText}
        </p>
      </div>
    </div>
  );
};

export default CustomBuyButton;
