import { basePath } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-brand-gray-700">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[15px]">
        <Link href="/" className="transition hover:opacity-90">
          <Image
            src={`${basePath}/images/logo.svg`}
            width={150}
            height={63}
            alt="Numic"
          />
        </Link>
        <div className="flex items-center leading-[1]">
          <nav>
            <ul className="flex items-center">
              <li>
                <Link
                  href="/registration?q=professional"
                  className="hover:shadow-b-2 bg-brand-gray-900 inline-block rounded-[3px] p-[8px_20px] text-base leading-[1.5] text-white transition hover:no-underline"
                >
                  🛠 For professionals
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/faq"
                  className="hover:text-brand-orange flex items-center p-[24px_20px] text-white hover:no-underline"
                >
                  FAQ
                  <span
                    className="group relative z-10 ms-[3px] mb-0.5 h-[12px] w-[12px] bg-[url('../../public/icons/help.png')] [background-size:24px_12px] hover:bg-[-12px_0px]"
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
              <li>
                <div className="group hover:bg-brand-gray-900 relative h-18 cursor-pointer p-[27px_20px] transition">
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
              </li>
              <li>
                <button
                  type="button"
                  className="hover:bg-brand-gray-900 ml-1.5 h-18 cursor-pointer p-[27px_17px] transition"
                >
                  <Image
                    width={28}
                    height={14}
                    src="https://flagcdn.com/gb.svg"
                    alt="uk"
                  />
                </button>
              </li>
              <li className="mr-4 flex">
                <Link
                  href="/login"
                  className="text-brand-orange hover:bg-brand-gray-900 h-18 px-5 leading-18 transition hover:text-white hover:no-underline"
                >
                  Login
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/registration"
                  className="bg-brand-orange hover:shadow-b-2 rounded-[3px] p-[9px_21px] leading-[1.5] text-white transition hover:no-underline"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
