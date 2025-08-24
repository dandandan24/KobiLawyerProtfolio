'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call or email service here
  };

  return (
    <div className="font-sans" dir="rtl">
      {/* Hero Section */}
      <section className="h-[45vh] relative flex items-center justify-center" style={{ backgroundImage: "url('/contact.jpeg')", backgroundSize: 'cover', backgroundPosition: '53% 83%' }}>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">צור קשר</h1>
          <p className="text-lg sm:text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">אנחנו כאן לעזור לך בכל שאלה או בעיה משפטית</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">שלח לנו הודעה</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
                      placeholder="הכנס את שמך המלא"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-right"
                      placeholder="הכנס את מספר הטלפון שלך"
                      dir="rtl"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      נושא *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 text-gray-800"
                    >
                      <option value="">בחר נושא</option>
                      <option value="contracts">דיני חוזים</option>
                      <option value="labor-law">דיני עבודה</option>
                      <option value="torts">נזיקין</option>
                      <option value="commercial-law">משפט מסחרי</option>
                      <option value="family-law">דיני משפחה</option>
                      <option value="real-estate">דיני מקרקעין</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    הודעה *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 resize-none text-gray-800 placeholder-gray-500"
                    placeholder="תאר את הבעיה או השאלה שלך"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 text-lg"
                >
                  שלח הודעה
                </button>
              </form>
            </div>
            
            {/* Map Component */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">מיקום המשרד</h2>
              
              {/* Map Placeholder */}
              <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <span className="text-gray-600">מפה של מיקום המשרד</span>
                  <p className="text-sm text-gray-500 mt-2">רחוב הרצל 123, תל אביב</p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">כתובת</p>
                    <p className="text-gray-600">רחוב הרצל 123, תל אביב, ישראל</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">טלפון</p>
                    <p className="text-gray-600">03-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">אימייל</p>
                    <p className="text-gray-600">kobi@lawyer.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">שעות פעילות</p>
                    <p className="text-gray-600">א'-ה': 9:00-18:00 | ו': 9:00-13:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 