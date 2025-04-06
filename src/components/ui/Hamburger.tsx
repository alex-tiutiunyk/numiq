"use client";

import { cn } from "@/utils";
import React from "react";

interface HamburgerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <button
        className="-mr-2 ml-2 p-2 text-[1px] leading-1 lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="grid justify-items-center gap-1">
          <span
            className={cn("bg-brand-orange h-1 w-7 rounded-full transition", {
              "translate-y-2 rotate-45": isOpen,
            })}
          ></span>
          <span
            className={cn("bg-brand-orange h-1 w-7 rounded-full transition", {
              "scale-x-0": isOpen,
            })}
          ></span>
          <span
            className={cn("bg-brand-orange h-1 w-7 rounded-full", {
              "-translate-y-2 -rotate-45": isOpen,
            })}
          ></span>
          <span className="aria-invisible">Open mobile menu</span>
        </div>
      </button>
    </>
  );
};

export default Hamburger;
