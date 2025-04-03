import { IRow } from "@/types/data";
import React from "react";

interface ToggleSwitchProps {
  data: IRow;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ data }) => {
  const { id } = data;
  return (
    <div className="relative h-[28px] w-[55px]">
      <input
        type="checkbox"
        className="peer absolute inset-0 z-1 cursor-pointer opacity-0"
        id={`checkbox-${id}`}
      />
      <label
        htmlFor={`checkbox-${id}`}
        className="bg-brand-gray-50 peer-checked:bg-brand-orange block h-full cursor-pointer rounded-[20px] transition before:absolute before:top-[3px] before:left-[3px] before:h-5.5 before:w-5.5 before:rounded-[11px] before:bg-white before:shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] before:transition before:content-[''] peer-checked:before:translate-x-6.5 after:absolute after:top-[7px] after:right-2.5 after:h-3.5 after:w-3.5 after:bg-[url('../../public/icons/cross.svg')] after:[background-size:14px_14px] after:content-[''] peer-checked:after:-translate-x-6 peer-checked:after:bg-[url('../../public/icons/mark.svg')]"
      ></label>
    </div>
  );
};

export default ToggleSwitch;
