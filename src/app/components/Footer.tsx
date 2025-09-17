'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const wrapperClasses = isHome
    ? 'bg-white text-gray-800'
    : 'bg-gray-800 text-white';

  const subTextColor = isHome ? 'text-gray-600' : 'text-gray-300';
  const borderClasses = isHome ? 'border-gray-200' : 'border-gray-700';
  const copyrightColor = isHome ? 'text-gray-500' : 'text-gray-400';

  return (
    <footer className={`${wrapperClasses} py-12`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">עו&ldquo;ד קובי רוזנברג</h3>
          <p className={subTextColor}>משפט אזרחי ומסחרי</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-8`}>
          <div>
            <h4 className="font-semibold mb-2">צור קשר</h4>
            <p className={subTextColor}>טלפון: 03-5609697</p>
            <p className={subTextColor}>טלפון נייד: 050-333-9697</p>
            <p className={subTextColor}>דוא״ל: kobi@rosenberg-law.co.il</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">כתובת</h4>
            <p className={subTextColor}>מידטאון, קומה 36, דרך מנחם בגין 144</p>
            <p className={subTextColor}>תל אביב</p>
          </div>
        </div>

        <div className={`border-t ${borderClasses} pt-8`}>
          <p className={copyrightColor}>&copy; 2025 עו&ldquo;ד קובי רוזנברג. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}


