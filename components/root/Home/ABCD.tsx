import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const ABCD = () => {
  return (
    <div className='w-full'>
     
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-orange-600 bg-orange-50 px-4 py-2 rounded-full">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">SMS API</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          98% Open Rate Platform
        </h2>

        <p className="text-lg text-gray-600 max-w-xl">
          A simple API that supports unicode and standard text for single or
          bulk messages, is customizable to your needs and works with mobile
          networks globally.
        </p>

        <Link
          href="/discover-more"
          className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-700"
        >
          Discover More <ArrowRight className="w-5 h-5 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default ABCD