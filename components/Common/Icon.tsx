import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
interface IconProps {
  source: string;
  width: number;
  height: number;
  alt: string;
  divW: string;
  divH: string;
  tooltipText?: string;
}

const Icon: React.FC<IconProps> = ({
  source,
  width,
  height,
  alt,
  divW,
  divH,
  tooltipText,
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={2}>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        {tooltipText && (
          <TooltipContent side="top" className="bg-purple-50">
            <p>{tooltipText}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default Icon;
