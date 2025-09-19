'use client';

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [textareaRows, setTextareaRows] = useState(12);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  // Individual state for form fields (for easier access)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTextareaRows(2);
      } else {
        setTextareaRows(12);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Israeli phone number validation (mobile and landline)
    const israeliPhoneRegex = /^(\+972|972|0)?(5[0-9]|7[2-9]|[2-4,8-9])[0-9]{7}$/;
    // International phone number validation (basic)
    const internationalPhoneRegex = /^\+[1-9]\d{1,14}$/;
    
    const cleanPhone = phone.replace(/[\s-()]/g, '');
    return israeliPhoneRegex.test(cleanPhone) || internationalPhoneRegex.test(cleanPhone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update individual states
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        // Clear email error when user starts typing
        if (emailError) {
          setEmailError(false);
          setEmailErrorMessage('');
        }
        break;
      case 'phone':
        setPhone(value);
        // Clear phone error when user starts typing
        if (phoneError) {
          setPhoneError(false);
          setPhoneErrorMessage('');
        }
        break;
      case 'message':
        setMessage(value);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous errors and status
    setEmailError(false);
    setPhoneError(false);
    setEmailErrorMessage('');
    setPhoneErrorMessage('');
    setSubmitStatus('idle');

    let hasErrors = false;

    // Validate email
    if (!email.trim()) {
        setEmailError(true);
        setEmailErrorMessage('כתובת המייל היא שדה חובה');
        hasErrors = true;
    } else if (!validateEmail(email.trim())) {
        setEmailError(true);
        setEmailErrorMessage('כתובת המייל אינה תקינה');
        hasErrors = true;
    }

    // Validate phone
    if (!phone.trim()) {
        setPhoneError(true);
        setPhoneErrorMessage('מספר הטלפון הוא שדה חובה');
        hasErrors = true;
    } else if (!validatePhone(phone.trim())) {
        setPhoneError(true);
        setPhoneErrorMessage('מספר הטלפון אינו תקין (נדרש מספר ישראלי או בינלאומי)');
        hasErrors = true;
    }

    // Only proceed if no validation errors
    if (!hasErrors) {
        setIsSubmitting(true);
        
        try {
            // EmailJS configuration - you'll need to update these values
            const templateParams = {
                from_name: name || 'לקוח חדש',
                from_email: email,
                from_phone: phone,
                message: message || 'לא צוינה הודעה',
                to_email: 'kobi@rosenberg-law.co.il'
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                'docome', // Replace with your EmailJS service ID
                'docome', // Replace with your EmailJS template ID
                templateParams,
                'AdaJ7dw4Wmj9bxnQf' // Replace with your EmailJS public key
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                // Reset form
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }
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
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 ${
                        emailError 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-gray-800'
                      }`}
                      placeholder="הכנס את כתובת האימייל שלך"
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailErrorMessage}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500 text-right ${
                        phoneError 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-gray-800'
                      }`}
                      placeholder="הכנס את מספר הטלפון שלך"
                      dir="rtl"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-600">{phoneErrorMessage}</p>
                    )}
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
                      <option value="/practice-areas/contracts">יישוב סכסוכים וליטיגציה</option>
                      <option value="/practice-areas/labor-law">משפט מסחרי</option>
                      <option value="/practice-areas/torts">נדל״ן</option>
                      <option value="/practice-areas/commercial-law">גבייה והוצאה לפועל</option>
                      <option value="/practice-areas/family-law">צוואות ויפוי כח מתמשך</option>
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
                    rows={textareaRows}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 resize-none text-gray-800 placeholder-gray-500"
                    placeholder="תאר את הבעיה או השאלה שלך"
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-medium">ההודעה נשלחה בהצלחה!</p>
                    <p className="text-sm">נחזור אליך בהקדם האפשרי.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-medium">שגיאה בשליחת ההודעה</p>
                    <p className="text-sm">אנא נסה שוב או צור איתנו קשר בטלפון.</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 text-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>
              </form>
            </div>
            
            {/* Map Component */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">מיקום המשרד</h2>
              
              {/* Google Maps Embed */}
              <div className="w-full h-80 rounded-lg overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=דרך+מנחם+בגין+144+תל+אביב+ישראל"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מיקום המשרד - דרך מנחם בגין 144, תל אביב"
                ></iframe>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">כתובת</p>
                    <p className="text-gray-600">מידטאון, דרך מנחם בגין 144, תל אביב, קומה 36</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">טלפון</p>
                    <p className="text-gray-600">050-333-9697</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">טלפון משרד</p>
                    <p className="text-gray-600">03-5609697</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">דוא״ל</p>
                    <p className="text-gray-600">kobi@rosenberg-law.co.il</p>
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