'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const pathname = usePathname();

  const specialities = [
    { title: "יישוב סכסוכים וליטיגציה", href: "/practice-areas/contracts" },
    { title: "משפט מסחרי", href: "/practice-areas/labor-law" },
    { title: "נדל״ן", href: "/practice-areas/torts" },
    { title: "גבייה והוצאה לפועל", href: "/practice-areas/commercial-law" },
    { title: "צוואות ויפוי כח מתמשך", href: "/practice-areas/family-law" },
    { title: "דיני מקרקעין", href: "/practice-areas/real-estate" }
  ];

  const isActive = (path: string) => pathname === path;
  const isSpecialitiesActive = pathname.startsWith('/practice-areas');

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50" dir="rtl">
      <div className="flex justify-between items-center w-full">
        {/* Navigation items on the right */}
        <div className="flex gap-20 mx-10">
          <Link 
            href="/" 
            className={`text-xl font-bold text-gray-800 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
              isActive('/') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
            }`}
          >
            דף הבית
          </Link>
          <Link 
            href="/about" 
            className={`text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
              isActive('/about') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
            }`}
          >
            אודות
          </Link>
          
          {/* Specialities Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSpecialitiesOpen(!isSpecialitiesOpen)}
              className={`text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 flex items-center gap-1 ${
                isSpecialitiesActive ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
              }`}
            >
              תחומי עיסוק
              <svg className={`w-5 h-5 transition-transform duration-200 ${isSpecialitiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isSpecialitiesOpen && (
              <div 
                className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={() => setIsSpecialitiesOpen(true)}
                onMouseLeave={() => setIsSpecialitiesOpen(false)}
              >
                {specialities.map((speciality, index) => (
                  <Link
                    key={index}
                    href={speciality.href}
                    className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 text-right ${
                      isActive(speciality.href) ? 'bg-gray-100 text-gray-800 underline underline-offset-6 decoration-gray-800 decoration-2' : ''
                    }`}
                    onClick={() => setIsSpecialitiesOpen(false)}
                  >
                    {speciality.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            href="/contact" 
            className={`text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
              isActive('/contact') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
            }`}
          >
            צור קשר
          </Link>
        </div>
        
        {/* Logo on the left */}
        <div className="text-3xl font-bold text-gray-800">
          Logo
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 