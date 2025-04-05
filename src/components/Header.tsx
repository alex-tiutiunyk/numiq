"use client";

import { basePath } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Hamburger } from "./ui";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <header className="bg-brand-gray-700 relative z-10">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5">
        <Link href="/" className="transition hover:opacity-90">
          <Image
            src={`${basePath}/images/logo.svg`}
            alt="Numic"
            width={150}
            height={30}
          />
        </Link>
        <div className="flex items-center leading-[1]">
          <nav className="flex items-center">
            <div className="group hover:bg-brand-gray-900 relative order-0 h-18 cursor-pointer p-[27px_20px] transition lg:order-1">
              <Image
                width={16}
                height={18}
                src={`${basePath}/icons/bell.svg`}
                alt="Items"
                className="group-hover:animate-ring"
              />
              <small className="text-brand-gray-900 absolute top-4.5 right-3 h-3.5 w-3.5 rounded-[7px] bg-white text-center text-[10px] leading-[15px]">
                0
              </small>
            </div>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-full right-0 left-0 overflow-hidden lg:contents"
            >
              <div className="bg-brand-gray-700 flex flex-col gap-2 p-4 pt-8 text-center lg:contents">
                <ul className="contents items-center lg:order-0 lg:flex">
                  <li className="order-3 lg:order-0">
                    <Link
                      href="/registration?q=professional"
                      className="hover:shadow-b-2 bg-brand-gray-900 block rounded-[3px] p-[8px_20px] text-base leading-[1.5] text-white transition hover:no-underline lg:inline-block"
                    >
                      🛠 For professionals
                    </Link>
                  </li>
                  <li className="order-1 lg:order-0 lg:flex">
                    <Link
                      href="/faq"
                      className="hover:text-brand-orange block items-center py-5 text-white hover:no-underline lg:flex lg:p-[24px_20px]"
                    >
                      FAQ
                      <span
                        className="group relative z-10 ms-[3px] mb-0.5 hidden h-[12px] w-[12px] bg-[url('../../public/icons/help.png')] [background-size:24px_12px] hover:bg-[-12px_0px] lg:block"
                        data-title="Frequently asked Questions"
                      >
                        <span
                          data-tooltip-target="help-tooltip"
                          className="inline-block overflow-hidden indent-[-9999px] text-[1px] leading-[1]"
                        >
                          ?
                        </span>
                        <span
                          className='text-brand-gray-900 invisible absolute top-full right-[-35px] p-[20px_8px_4px] text-sm whitespace-nowrap opacity-0 transition group-hover:visible group-hover:opacity-100 before:absolute before:top-[16px] before:right-0 before:bottom-0 before:left-0 before:z-[-1] before:rounded-[3px] before:bg-white before:content-[""] after:absolute after:top-[7px] after:right-[31px] after:-z-10 after:h-5 after:w-5 after:-rotate-135 after:bg-white after:content-[""] hover:visible hover:opacity-100'
                          role="tooltip"
                          id="help-tooltip"
                        >
                          Frequently asked Questions
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul className="order-2 flex flex-col items-center lg:flex-row">
                  <li className="w-full">
                    <button
                      type="button"
                      className="hover:bg-brand-gray-900 w-full cursor-pointer py-4.5 transition lg:ml-1.5 lg:h-18 lg:w-auto lg:p-[27px_17px]"
                    >
                      <Image
                        width={28}
                        height={14}
                        src="https://flagcdn.com/gb.svg"
                        alt="uk"
                        className="mx-auto"
                      />
                    </button>
                  </li>
                  <li className="w-full lg:mr-4 lg:flex">
                    <Link
                      href="/login"
                      className="text-brand-orange hover:bg-brand-gray-900 block px-5 py-6 transition hover:text-white hover:no-underline lg:inline lg:h-18 lg:py-0 lg:leading-18"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="flex w-full">
                    <Link
                      href="/registration"
                      className="bg-brand-orange hover:shadow-b-2 w-full rounded-[3px] p-[9px_21px] leading-[1.5] text-white transition hover:no-underline lg:w-auto"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </nav>
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
