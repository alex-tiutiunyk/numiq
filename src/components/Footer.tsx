import { basePath } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brand-gray-700 pt-7 pb-5">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="flex gap-7.5 pb-8">
          <div className="w-[23%] pt-1">
            <Link href="/" className="transition hover:opacity-90">
              <Image
                src={`${basePath}/images/logo.svg`}
                width={150}
                height={63}
                alt="Numic"
              />
            </Link>
          </div>
          <div className="w-[14.5%]">
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
          <div className="w-[23%]">
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
          <div className="grow">
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
        <div className="border-brand-gray-300 flex items-center justify-between border-t-1 pt-3.5">
          <p className="m-0">&copy; 2025 NUMIQ</p>
          <div className="flex items-center gap-6">
            <span>Safe payment guarantee</span>
            <ul className="flex items-center gap-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
