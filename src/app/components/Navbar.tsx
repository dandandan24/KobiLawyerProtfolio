'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Reset scroll state when navigating to home page
    if (pathname === '/') {
      setIsScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const specialities = [
    { title: "יישוב סכסוכים וליטיגציה", href: "/practice-areas/contracts" },
    { title: "משפט מסחרי", href: "/practice-areas/labor-law" },
    { title: "נדל״ן", href: "/practice-areas/torts" },
    { title: "גבייה והוצאה לפועל", href: "/practice-areas/commercial-law" },
    { title: "צוואות ויפוי כח מתמשך", href: "/practice-areas/family-law" },
  ];

  const isActive = (path: string) => pathname === path;
  const isSpecialitiesActive = pathname.startsWith('/practice-areas');

  return (
    <nav className={`${pathname === '/' ? (isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent shadow-none') + ' lg:bg-white lg:shadow-md sticky' : 'bg-white shadow-md sticky'} py-4 px-6 top-0 z-50 w-full ${isMobileMenuOpen ? '' : 'transition-all duration-300'}`} dir="rtl">
      <div className="flex justify-between items-center w-full">
        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 ${pathname === '/' ? (isScrolled || isMobileMenuOpen ? 'bg-gray-800' : 'bg-white') + ' lg:bg-gray-800' : 'bg-gray-800'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${pathname === '/' ? (isScrolled || isMobileMenuOpen ? 'bg-gray-800' : 'bg-white') + ' lg:bg-gray-800' : 'bg-gray-800'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${pathname === '/' ? (isScrolled || isMobileMenuOpen ? 'bg-gray-800' : 'bg-white') + ' lg:bg-gray-800' : 'bg-gray-800'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Desktop Navigation items on the right */}
        <div className="hidden lg:flex gap-20 mx-10">
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
            href="/files" 
            className={`text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
              isActive('/files') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
            }`}
          >
            פסקי דין
          </Link>
          
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
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/Logo.svg" 
              alt="Logo" 
              className={`h-12 w-auto ${pathname === '/' ? (isScrolled || isMobileMenuOpen ? 'brightness-100 invert-0' : 'brightness-0 invert') + ' lg:brightness-100 lg:invert-0' : ''}`} 
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 shadow-lg transition-all duration-300">
          <div className="px-6 py-8 space-y-6 h-full overflow-y-auto">
            <Link 
              href="/" 
              className={`block text-xl font-bold text-gray-800 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
                isActive('/') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              דף הבית
            </Link>
            <Link 
              href="/about" 
              className={`block text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
                isActive('/about') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              אודות
            </Link>
            
            {/* Mobile Specialities Section */}
            <div className="space-y-2">
              <div className="text-xl font-bold text-gray-700 mb-2">תחומי עיסוק</div>
              {specialities.map((speciality, index) => (
                <Link
                  key={index}
                  href={speciality.href}
                  className={`block pr-4 py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
                    isActive(speciality.href) ? 'bg-gray-100 text-gray-800 underline underline-offset-6 decoration-gray-800 decoration-2' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {speciality.title}
                </Link>
              ))}
            </div>
            
            <Link 
              href="/files" 
              className={`block text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
                isActive('/files') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              פסקי דין
            </Link>
            
            <Link 
              href="/contact" 
              className={`block text-xl font-bold text-gray-700 hover:text-gray-800 hover:underline hover:underline-offset-6 hover:decoration-gray-800 hover:decoration-2 transition-all duration-200 ${
                isActive('/contact') ? 'underline underline-offset-6 decoration-gray-800 decoration-2' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              צור קשר
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 