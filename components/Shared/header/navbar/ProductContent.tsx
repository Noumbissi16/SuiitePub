import { MessageCircle, Phone, Shield } from "lucide-react";
import {Link} from "@/i18n/navigation";
import React from "react";

const ProductContent = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-gray-500 mb-6">PRODUCTS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SMS */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">SMS</h3>
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
                <h3 className="font-bold text-lg mb-1">WhatsApp API</h3>
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
                <h3 className="font-bold text-lg mb-1">Verify API</h3>
                <p className="text-gray-600">
                  Secure user authentication with OTPs for transactions.
                </p>
              </div>
            </div>

            {/* Viber API */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Viber API</h3>
                <p className="text-gray-600">
                  Boost engagement with Viber messaging for businesses.
                </p>
              </div>
            </div>

            {/* Number Lookup API */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Number Lookup API</h3>
                <p className="text-gray-600">
                  Verify and validate phone numbers instantly.
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

export default ProductContent;
