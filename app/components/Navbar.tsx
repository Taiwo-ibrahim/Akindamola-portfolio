"use client"

import React, { useState } from 'react';
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

// Define a type for our nav links
interface NavLink {
  label: string;
  target: string
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'home', href: '/', target: '' },
  { label: 'backyard', href: '/backyard', target: '' },
  { label: 'résumé', href: 'https://docs.google.com/document/d/1tZa6G7q1HvHyxQlCk29kzQTYCG93QYPY71UZgrseMgw/edit?tab=t.0#heading=h.cxxkes25b26', target: '_blank' },
  { label: 'contact', href: '/Contact-me', target: '' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-transparent sticky top-0 w-full">
      <div className="max-w-7xl mx-auto px- sm:px- ">
        <div className="flex justify-between h-16 items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                target={link.target}
                href={link.href}
                className="font-mono relative font-[13.6px] text-[#F6F6F6] hover:text-white font-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center p-[10px] w-[120px] justify-between">
            {/* Twitter/X */}
            <span className="relative group cursor-pointer py-1">
              <a href='https://x.com/akindamola2?s=20' target='_blank'>

                <RiTwitterXLine className="text-[#fff] text-[16px] transition-opacity group-hover:opacity-70" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
              </a>
            </span>

            {/* LinkedIn */}
            <span className="relative group cursor-pointer py-1">
              <a target='_blank' href='https://www.linkedin.com/in/akintola-akindamola-ba4167265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>

                <FaLinkedin className="text-[#fff] text-[16px] z-60 transition-opacity group-hover:opacity-70" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
              </a>
            </span>

            {/* Behance */}
            <span className="relative group cursor-pointer py-1">
              <a target='_blank' href='https://www.behance.net/akintolakindam'>

                <FaBehance className="text-[#fff] text-[16px] z-60 transition-opacity group-hover:opacity-70" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left" />
              </a>
            </span>
            </div>      
          

          {/* Mobile Menu Button */}
          <div className="md:hidden w-full flex justify-between items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className='flex gap-[10px] items-center '>
                
                <span className=''>
                  <a target='_blank' href='https://x.com/akindamola2?s=20'>

                    <RiTwitterXLine className=' text-[#fff] text-[16px] cursor-pointer bg-[inherit]'/>
                  </a>
                </span>
                <span>
                  <a target='_blank' href='https://www.linkedin.com/in/akintola-akindamola-ba4167265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                    <FaLinkedin className=' text-[#fff] text-[16px] cursor-pointer z-60' />
                  </a>
                </span>
                <span>
                  <a href='https://www.behance.net/akintolakindam'>
                    <FaBehance className='text-[#fff] text-[16px] cursor-pointer z-60'/>
                  </a>
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-transparent border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
              >
                {link.label}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;