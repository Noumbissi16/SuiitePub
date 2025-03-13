import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react'

const RightSideComponent = () => {
  return (
    <div className="hidden lg:flex relative bg-blue-600 text-white w-2/5">
      <div className="absolute top-4 right-4">
        <svg viewBox="0 0 200 50" className="w-32 h-8">
          <g fill="currentColor">
            <path d="M30,10 C40,10 48,18 48,28 C48,38 40,46 30,46 C20,46 12,38 12,28 C12,18 20,10 30,10 Z M30,18 C24.5,18 20,22.5 20,28 C20,33.5 24.5,38 30,38 C35.5,38 40,33.5 40,28 C40,22.5 35.5,18 30,18 Z" />
            <path d="M30,0 L40,10 L20,10 Z" />
            <path d="M30,56 L40,46 L20,46 Z" />
          </g>
          <text
            x="60"
            y="25"
            fontFamily="Arial"
            fontSize="16"
            fontWeight="bold"
            fill="currentColor"
          >
            Direct7
          </text>
          <text
            x="60"
            y="40"
            fontFamily="Arial"
            fontSize="16"
            fontWeight="bold"
            fill="currentColor"
          >
            Networks
          </text>
        </svg>
      </div>

      <div className="  flex flex-col justify-center p-12 xl:p-16">
        <div className="max-w-md mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%2835%29-ECsFa5PvDBFc4JkBcb9fJ6MYShPZQf.png"
            alt="Welcome Illustration"
            width={400}
            height={300}
            className="mb-8"
          />
          <h2 className="text-3xl font-semibold mb-4">Welcome Back to D7</h2>
          <p className="text-lg opacity-90">
            Access your account to manage your messaging solutions and explore
            our global coverage.
          </p>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 text-sm opacity-90">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightSideComponent