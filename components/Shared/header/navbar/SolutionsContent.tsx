import React from "react";
import { MessageCircle, Phone, Shield } from "lucide-react";
import Link from "next/link";

const SolutionsContent = () => {
  return (
    <div className=" w-full h-full ">
      <div className=" mx-auto px-2 py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-gray-500 mb-6">Solutions</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SMS */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">SMS Marketing</h3>
                <p className="text-gray-600">
                  SMS solutions to enhance direct business communication.
                </p>
              </div>
            </div>

            {/* WhatsApp API */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp Chatbot</h3>
                <p className="text-gray-600">
                  WhatsApp API for seamless customer engagement.
                </p>
              </div>
            </div>

            {/* Verify API */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">WhatsApp Inbox API</h3>
                <p className="text-gray-600">
                  Secure user authentication with OTPs for transactions.
                </p>
              </div>
            </div>
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
              <Link href="/careers" className="font-bold text-lg">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="font-bold text-lg">
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
    </div>
  );
};

export default SolutionsContent;
