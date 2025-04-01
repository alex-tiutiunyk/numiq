import { IData } from "@/types/data";
import { cn } from "@/utils/cn";
import React from "react";

interface ConstructionTitleProps {
  block: IData;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const ConstructionTitle: React.FC<ConstructionTitleProps> = ({
  block,
  setIsOpen,
  isOpen,
}) => {
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-brand-gray-100 text-brand-gray-30 relative flex rounded-t-[20px] p-4 pr-0 leading-[20px]">
      <div className="flex grow gap-4">
        <h2 className="text-base leading-[20px] font-bold uppercase">
          {block.titleSection}
        </h2>
        {block.rows.length > 0 && (
          <em className="text-[12.8px] not-italic before:m-[-1px_3px_0_0] before:inline-block before:h-5 before:w-5 before:bg-[url('../../public/icons/time.svg')] before:bg-[100%] before:align-top before:content-['']">
            31.03.2025
          </em>
        )}
      </div>
      <div className="w-[13%] text-center">
        Price
        <span className="mt-[1px] ml-1 inline-block h-4 w-4 cursor-pointer bg-[url('../../public/icons/info.png')] [background-size:33px_16px] align-top hover:bg-[-17px_0px]"></span>
      </div>
      <div className="w-[13%] text-center">Quantity</div>
      <div className="w-[13%] text-center">Sum</div>
      {block.rows.length > 2 && (
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            "border-brand-orange absolute top-4 right-4 h-3 w-3 transform-[rotate(135deg)] cursor-pointer overflow-hidden border-t-2 border-r-2 indent-[-9999px] text-[1px] leading-[1px] transition",
            { "top-5 transform-[rotate(45deg)]": !isOpen },
          )}
        >
          close block
        </button>
      )}
    </div>
  );
};

export default ConstructionTitle;
