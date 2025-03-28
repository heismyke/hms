'use client'

import Link from 'next/link'
import { FaHome, FaCalendarAlt, FaInfoCircle, FaSignInAlt } from 'react-icons/fa'

const Navbar = () => {
  const Links = [
    { href: '/', name: 'home', icon: FaHome, requireAuth: false },
    { href: '/appointment', name: 'appointment', icon: FaCalendarAlt, requireAuth: false },
    { href: '/about', name: 'about', icon: FaInfoCircle, requireAuth: false },
    { href: '/login', name: 'login', icon: FaSignInAlt, requireAuth: false },
  ]

  return (
    <nav
      className="
      fixed 
      bottom-2 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-1/2 
      bg-black 
      rounded-full 
      shadow-lg
      max-md:bottom-0 
      max-md:top-auto 
      max-md:left-0 
      max-md:translate-x-0 
      max-md:translate-y-0 
      max-md:w-full 
      max-md:rounded-t-2xl 
      z-50
      max-md:rounded-b-none
    "
    >
      <ul className="flex space-x-4 p-4 max-md:justify-around">
        {Links.map(({ href, name, icon: Icon }, index) => (
          <li key={index} className="max-md:flex-1 max-md:text-center">
            <Link
              href={href}
              className="
                text-[#706D54] 
                hover:text-[white] 
                hover:bg-[#A08963] 
                active:bg-[#C9B194] 
                px-3 py-1 
                rounded-full 
                transition-all 
                duration-300 
                ease-in-out
                flex 
                items-center 
                gap-2 
                max-md:flex-col 
                max-md:py-2
              "
            >
              {Icon && <Icon className="text-lg max-md:text-xl max-md:mb-1" />}
              <span className="max-md:text-xs">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
