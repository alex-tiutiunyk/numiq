"use client";

import { IRow } from "@/types/data";
import Link from "next/link";
import React from "react";
import { SmartTooltip, ToggleSwitch } from "../ui";

interface ConstructionRowProps {
  row: IRow;
}

const ConstructionRow: React.FC<ConstructionRowProps> = ({ row }) => {
  const { price, title, url, units } = row;

  const tooltipWrapRef = React.useRef<HTMLDivElement>(null!);

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
    <div className="group/row bg-brand-gray-500 hover:bg-brand-gray-200 border-brand-gray-160 flex flex-wrap items-center justify-center border-b px-4 pr-0 pb-2.5 leading-[20px] transition select-none last:rounded-b-[20px] hover:text-white md:flex-nowrap md:pb-0">
      <div
        ref={tooltipWrapRef}
        className="w-full grow gap-4 py-3.5 transition md:flex md:w-auto md:max-w-[52%] lg:max-w-[61%]"
      >
        <p className="m-0">
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
          {row.textTooltip && (
            <SmartTooltip
              tooltipWrapRef={tooltipWrapRef}
              title={row.textTooltip}
            />
          )}
        </p>
      </div>
      <div className="w-[25%] justify-center leading-[36px] before:block before:pb-3 before:text-sm before:content-['Price'] md:w-[13%] md:text-center md:leading-[20px] md:before:hidden">
        {row.visibleWhenLogin ? (
          <Link
            href="/registration"
            className="group bg-brand-gray-50 hover:bg-brand-orange relative flex h-9 max-w-[50px] justify-center rounded-[3px] [background-size:18px_36px] transition after:my-auto after:h-4.5 after:w-4.5 after:bg-[url('../../public/icons/lock.png')] after:content-[''] hover:after:[background-position:_0_-18px] md:mx-auto md:-my-2"
          >
            <span className="invisible absolute bottom-full left-[50%] mb-3 min-w-[250px] transform-[translateX(-50%)] rounded-[3px] bg-white px-2.5 py-1.5 text-left text-sm text-black opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 after:absolute after:top-full after:left-[50%] after:-mt-1 after:-ml-1 after:h-5 after:w-5 after:transform-[rotate(45deg)_translateX(-50%)] after:bg-white after:content-['']">
              Please log in or register to view LOCKED items.
            </span>
          </Link>
        ) : (
          price + "£"
        )}
      </div>
      <div className="flex w-[180px] flex-wrap before:block before:w-full before:pb-3 before:text-sm before:content-['Quantity'] md:w-[13%] md:justify-center md:before:hidden">
        {row.checkbox ? (
          <ToggleSwitch data={row} />
        ) : (
          <>
            <input
              type="number"
              placeholder="0"
              value={inputValue}
              max={99999}
              onChange={(event) => handleChange(event)}
              className="placeholder:text-brand-gray-100 text-brand-gray-100 group-hover/row:bg-brand-gray-10 w-[100px] rounded-l-[3px] bg-white p-2 text-center text-sm focus:outline-0 md:w-[40px] lg:w-[80px]"
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
          </>
        )}
      </div>
      <div className="w-auto grow justify-center px-2 text-center before:block before:w-full before:pb-3 before:text-sm before:content-['Sum'] md:w-[22%] md:flex-grow-0 md:before:hidden lg:w-[13%]">
        {row.visibleWhenLogin ? (
          <Link
            href="/registration"
            className="group bg-brand-gray-50 hover:bg-brand-orange relative mx-auto block h-9 max-w-[120px] rounded-[3px] leading-[36px] font-bold text-white transition after:mt-2 after:ml-2 after:inline-block after:h-4 after:w-4 after:bg-[url('../../public/icons/help.png')] after:[background-size:32px_16px] after:align-top after:content-[''] hover:no-underline md:-my-2"
          >
            LOCKED
            <span className="invisible absolute right-0 bottom-full mb-3 min-w-[250px] rounded-[3px] bg-white px-2.5 py-1.5 text-left text-sm font-normal text-black opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 after:absolute after:top-full after:right-[52px] after:-mt-3 after:h-5 after:w-5 after:transform-[rotate(45deg)] after:bg-white after:content-['']">
              Please log in or register to view LOCKED items.
            </span>
          </Link>
        ) : (
          <div className="maw-w-[90%] overflow-x-auto whitespace-nowrap [scrollbar-width:thin]">
            {totalPrice + " £"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConstructionRow;
