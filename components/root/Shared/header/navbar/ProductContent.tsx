import { MessageCircle, Phone, Shield } from "lucide-react";
import {Link} from "@/i18n/navigation";
import React from "react";

const ProductContent = () => {
  return (
    <>
      <div className=" w-[70%] h-full mx-auto pt-12 flex justify-between items-start gap-8 max-xl:flex-col max-xl:w-full max-xl:pt-4 max-xl:gap-4 overflow-scroll">
        <div className="w-2/3 max-xl:w-full">
          <h3 className="text-lg font-bold text-gray-500 mb-1 px-6 max-xl:px-0">
            PRODUCTS
          </h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 max-xl:gap-1">
            {/* SMS */}
            <Link
              href="/sms"
              className="flex gap-4 hover:bg-gray-100 transition-all ease-in  p-6 max-xl:px-4 max-xl:py-2 max-xl:my-4 rounded-sm cursor-pointer"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">SMS</h3>
                <p className="text-gray-600">
                  SMS solutions to enhance direct business communication.
                </p>
              </div>
            </Link>

            {/* WhatsApp API */}
            <Link
              href="/whatsapp-business-api"
              className="flex gap-4 hover:bg-gray-100 transition-all ease-in  p-6 max-xl:px-4 max-xl:py-2 max-xl:my-4 rounded-sm cursor-pointer"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp API</h3>
                <p className="text-gray-600">
                  WhatsApp API for seamless customer engagement.
                </p>
              </div>
            </Link>

            {/* Verify API */}
            <Link
              href="/otp-verification-api"
              className="flex gap-4 hover:bg-gray-100 transition-all ease-in  p-6 max-xl:px-4 max-xl:py-2 max-xl:my-4 rounded-sm cursor-pointer"
            >
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Verify API</h3>
                <p className="text-gray-600">
                  Secure user authentication with OTPs for transactions.
                </p>
              </div>
            </Link>
            {/* Number Lookup API */}
            <Link
              href="/number-lookup-api"
              className="flex gap-4 hover:bg-gray-100 transition-all ease-in  p-6 max-xl:px-4 max-xl:py-2 max-xl:my-4 rounded-sm cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Number Lookup API</h3>
                <p className="text-gray-600">
                  Verify and validate phone numbers instantly.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-6">EXPLORE</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="font-bold text-lg">
                About Us
              </Link>
            </li>
            <li>
              <Link href=" " className="font-bold text-lg">
                Careers
              </Link>
            </li>
            <li>
              <Link href=" " className="font-bold text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-bold text-lg">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
