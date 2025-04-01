"use client";

import { IRow } from "@/types/data";
import React from "react";

interface ConstructionRowProps {
  row: IRow;
}

const ConstructionRow: React.FC<ConstructionRowProps> = ({ row }) => {
  const { price, title, url, units } = row;

  const [inputValue, setInputValue] = React.useState<string>("");
  const [totalPrice, setTotalPrice] = React.useState<string>("0");

  const handleClear: () => void = () => {
    setInputValue("");
    setTotalPrice("0");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    setInputValue(value);
    setTotalPrice(String(price * Number(value)));
  };

  return (
    <div className="group/row bg-brand-gray-500 hover:bg-brand-gray-200 border-brand-gray-160 flex border-b px-4 py-3.5 pr-0 leading-[20px] transition select-none last:rounded-b-[20px] hover:text-white">
      <div className="flex grow gap-4 transition">
        {url ? (
          <a
            href="#"
            className="hover:text-brand-orange text-brand-gray-20 transition hover:no-underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </div>
      <div className="w-[13%] text-center">{price} £</div>
      <div className="-my-2 flex w-[13%] justify-center">
        <input
          type="number"
          placeholder="0"
          value={inputValue}
          onChange={(event) => handleChange(event)}
          className="placeholder:text-brand-gray-100 text-brand-gray-100 group-hover/row:bg-brand-gray-10 w-[80px] rounded-l-[3px] bg-white p-2 text-center text-sm focus:outline-0"
        />
        <span className="group group-hover/row:bg-brand-gray-10 text-brand-gray-100 border-brand-gray-15 relative w-[50px] rounded-r-[3px] border-l bg-white p-2 text-center text-sm">
          {units}
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-0 cursor-pointer overflow-hidden rounded-r-[3px] bg-white bg-[url('../../public/icons/clear.svg')] [background-size:26px_26px] bg-center bg-no-repeat indent-[-9999px] text-[1px] leading-[1px] opacity-0 transition group-hover:opacity-100"
          >
            clear
          </button>
        </span>
      </div>
      <div className="w-[13%] text-center">{totalPrice} £</div>
    </div>
  );
};

export default ConstructionRow;
