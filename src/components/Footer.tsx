import { basePath } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brand-gray-700 pt-7 pb-5">
      <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-5 sm:text-left">
        <div className="flex flex-col flex-wrap gap-5 pb-8 sm:flex-row sm:gap-7.5 md:flex-nowrap">
          <div className="w-[100%] pt-1 md:w-[23%]">
            <Link href="/" className="transition hover:opacity-90">
              <Image
                src={`${basePath}/images/logo.svg`}
                width={150}
                height={63}
                alt="Numic"
                className="mx-auto md:mx-0"
              />
            </Link>
          </div>
          <div className="sm:w-[26%] md:w-[14.5%]">
            <h4 className="mb-2.5 font-bold">Information</h4>
            <nav>
              <ul>
                <li className="mb-0.5">
                  <a
                    href="#"
                    className="hover:text-brand-orange transition hover:no-underline"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-0.5">
                  <a
                    href="#"
                    className="hover:text-brand-orange transition hover:no-underline"
                  >
                    How does it work
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sm:w-[26%] md:w-[23%]">
            <h4 className="mb-2.5 font-bold">Important links</h4>
            <nav>
              <ul>
                <li className="mb-0.5">
                  <a
                    href="#"
                    className="hover:text-brand-orange transition hover:no-underline"
                  >
                    Login
                  </a>
                </li>
                <li className="mb-0.5">
                  <a
                    href="#"
                    className="hover:text-brand-orange transition hover:no-underline"
                  >
                    Registration
                  </a>
                </li>
                <li className="mb-0.5">
                  <a
                    href="#"
                    className="hover:text-brand-orange transition hover:no-underline"
                  >
                    General terms and conditions
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sm:grow">
            <h4 className="mb-2.5 font-bold">Support</h4>
            <ul>
              <li className="mb-0.5">
                <a
                  href="mailto:support@numiq.com"
                  className="group hover:text-brand-orange transition hover:no-underline"
                >
                  <span className="group-hover:bg-brand-orange bg-brand-gray-40 mt-0.5 mr-1 inline-block h-6 w-6 align-top transition [mask-image:url('../../public/icons/email.svg')] [mask-size:cover]"></span>
                  support@numiq.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-brand-gray-300 flex flex-col items-center justify-between gap-2 border-t-1 pt-3.5 md:flex-row md:gap-0">
          <div className="flex flex-col items-center gap-2 md:order-1 md:flex-row md:gap-6">
            <span className="order-1 md:order-0">Safe payment guarantee</span>
            <ul className="order-0 flex flex-col items-center gap-2 sm:flex-row sm:gap-6 md:order-1">
              <li>
                <Image
                  width={50}
                  height={21}
                  src={`${basePath}/icons/stripe-icon.png`}
                  alt="Stripe"
                />
              </li>
              <li>
                <Image
                  width={35}
                  height={35}
                  src={`${basePath}/icons/paypal-icon.png`}
                  alt="PayPal"
                />
              </li>
              <li>
                <Image
                  width={45}
                  height={45}
                  src={`${basePath}/icons/visa-icon.png`}
                  alt="Visa"
                />
              </li>
              <li>
                <Image
                  width={95}
                  height={29}
                  src={`${basePath}/icons/mastercard-icon.png`}
                  alt="Mastercard"
                />
              </li>
            </ul>
          </div>
          <p className="m-0 md:order-0">&copy; 2025 NUMIQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
