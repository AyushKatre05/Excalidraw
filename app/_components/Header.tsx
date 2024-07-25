import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-gray-100 shadow-lg">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src='/logo.svg'
            alt='logo'
            width={100}
            height={100}
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Authentication Links */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4">
            <div className="rounded-md bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-600">
              <LoginLink postLoginRedirectURL="/dashboard">Login</LoginLink>
            </div>
            <div className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600">
              <RegisterLink>Register</RegisterLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
