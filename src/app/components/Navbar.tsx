'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6" dir="rtl">
      <div className="flex justify-between items-center w-full">
        {/* Navigation items on the right */}
        <div className="flex gap-20">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            דף הבית
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            אודות
          </Link>
          <Link href="/practice-areas" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            תחומי עיסוק
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            צור קשר
          </Link>
        </div>
           {/* Logo on the left */}
           <div className="text-2xl font-bold text-gray-800">
          Kobi
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 