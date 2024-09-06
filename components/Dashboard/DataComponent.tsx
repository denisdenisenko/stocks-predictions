import React from "react";
import Image from "next/image";

const DataComponent = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="p-[6px] sm:p-[10px] flex-shrink-0">
          <Image
            width={12}
            height={30}
            alt="Logo"
            src={"/icons/FingerprintData.svg"}
            className="text-funBlue-600"
          />
        </div>
        <div>
          <div>
            <p className="font-poppins font-medium text-[16px] sm:text-[20px] text-funBlue-950">
              Growth Potential
            </p>
            <p className="font-poppins font-normal text-[14px] sm:text-[18px] text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              incidunt? Perferendis temporibus neque ad, ipsum autem architecto
              sequi iure quis facere labore tempora magnam voluptate error?
              Reiciendis, quas quibusdam facere voluptates voluptatibus unde hic
              id suscipit expedita corrupti! Facere modi quia fuga hic aliquid?
              Architecto nihil ipsam laboriosam obcaecati suscipit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComponent;
