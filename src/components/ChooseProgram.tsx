"use client";

import { basePath, cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseProgram: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const textContent = [
    `The project calculator is an interactive price list of construction works. 
     Calculate approximately how much your renovation will cost or pre-calculate 
     the price even for painting one room.`,

    `The price list for construction works includes the most common construction 
     activities, from demolition work to painting, masonry and tiling, together with 
     all other construction works, as well as plumbing, electrical and heating works. 
     So that you can calculate the price of all the work that your renovation includes.`,

    `The prices of construction works in 2025 may vary depending on the region 
     in which your renovation or construction is located. The project calculator 
     takes this into account and determines the average price for the whole of England. 
     The resulting price is indicative, but ideal for preliminary determination of 
     the budget for your renovation. We recalculate the price list of construction 
     works regularly so that you can be sure that the prices you are counting on are 
     up-to-date.`,

    `The final price of your reconstruction will be confirmed by your foreman or 
     construction company in the submitted calculation.`,
  ];

  const handleOpen: () => void = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section className="flex gap-23 py-[63px_50px]">
      <div className="w-full lg:w-[48%]">
        <h1 className="text-brand-gray-40 my-[0_32px] text-[40px] leading-[1.2] font-normal">
          Construction price list 2025
        </h1>
        <div
          className={cn(
            "after:from-brand-gray-800 relative -mb-6.5 max-h-[220px] overflow-hidden transition-[max-height] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[100px] after:bg-linear-to-t after:to-transparent after:content-['']",
            { "mb-0 max-h-[1500px] after:hidden": isOpen },
          )}
        >
          {textContent.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <button
          type="button"
          onClick={handleOpen}
          className="hover:text-brand-orange text-brand-gray-20 relative mb-7 inline-block cursor-pointer align-top underline"
        >
          {isOpen ? "Read less" : "Read more"}
        </button>
        <footer className="flex items-center gap-7">
          <Link
            href="/registration"
            className="bg-brand-orange hover:shadow-b-2 rounded-[3px] px-5 py-2 leading-[1.5] text-white transition hover:no-underline"
          >
            Choose a program
          </Link>
          <span>
            Already have an account?{" "}
            <Link href="/login" className="text-brand-orange hover:underline">
              Log in
            </Link>
          </span>
        </footer>
      </div>
      <div className="hidden grow pt-8 lg:block">
        <Image
          width={486}
          height={320}
          alt=""
          src={`${basePath}/images/top-kalk.png`}
        />
      </div>
    </section>
  );
};

export default ChooseProgram;
