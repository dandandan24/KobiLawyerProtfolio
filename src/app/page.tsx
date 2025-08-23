'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: "דוד לוי",
      company: "חברת לוי בע\"מ",
      text: "עו\"ד קובי סייע לנו בפתרון סכסוך מורכב בצורה מקצועית ואפקטיבית."
    },
    {
      name: "שרה כהן",
      company: "עצמאית",
      text: "הטיפול היה מקצועי, אדיב ומעל לכל - אפקטיבי. ממליצה בחום!"
    },
    {
      name: "יוסי ישראלי",
      company: "ישראלי ושות'",
      text: "ניסיון רב וידע מעמיק בתחום. פתר את הבעיה במהירות ובמקצועיות."
    },
    {
      name: "מיכל רוזן",
      company: "רוזן ושות'",
      text: "שירות מעולה ומקצועי. עו\"ד קובי פתר לנו בעיה מורכבת במהירות."
    },
    {
      name: "אבי כהן",
      company: "חברת כהן בע\"מ",
      text: "מקצועיות ברמה הגבוהה ביותר. ממליץ בחום לכל מי שצריך עו\"ד טוב."
    },
    {
      name: "דנה לוי",
      company: "עו\"ד עצמאית",
      text: "עבודה מדויקת ומקצועית. עו\"ד קובי הוא אחד העורכי הדין הטובים בתחום."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= recommendations.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  const getVisibleRecommendations = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % recommendations.length;
      visible.push(recommendations[index]);
    }
    return visible;
  };

  return (
    <div className="font-sans" dir="rtl">
      {/* Section 1: Hero Section - 60% screen height */}
      <section className="h-[70vh] relative bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">עו"ד קובי כהן</h1>
          <p className="text-xl">מומחה במשפט אזרחי ומסחרי</p>
        </div>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Section 2: About Section - 100% screen height */}
      <section className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex items-start gap-16">
          {/* Text content - 60% width */}
          <div className="flex-1 pt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">אודותיי</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              אני עו"ד קובי כהן, בעל ניסיון של למעלה מ-15 שנה בתחום המשפט האזרחי והמסחרי. 
              אני מתמחה בפתרון סכסוכים מורכבים ומספק ייעוץ משפטי מקצועי ואמין ללקוחותיי.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              המשרד שלי מתמחה במגוון רחב של תחומים משפטיים, כולל דיני חוזים, 
              דיני עבודה, נזיקין ומשפט מסחרי. אני מאמין בגישה אישית ומותאמת לכל לקוח.
            </p>
          </div>
          {/* Picture - 40% width, 60% height */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">תמונה של עו"ד קובי</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Specialities Section - 60% screen height */}
      <section className="h-[70vh] py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-16">תחומי התמחות</h2>
          <div className="grid grid-cols-3 gap-12">
            {/* 6 speciality items */}
            {[
              { title: "דיני חוזים", description: "ניסוח ובדיקת חוזים מכל הסוגים" },
              { title: "דיני עבודה", description: "ייצוג עובדים ומעסיקים" },
              { title: "נזיקין", description: "תביעות נזיקין ותאונות" },
              { title: "משפט מסחרי", description: "חברות ועסקים" },
              { title: "דיני משפחה", description: "גירושין, מזונות וירושות" },
              { title: "דיני מקרקעין", description: "רכישת נכסים ועסקאות" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Beliefs Section - 40% screen height */}
      <section className="h-[40vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-between items-start mb-8 px-8">
            {/* 5 circular logos spread across full width */}
            {[
              { 
                number: 1, 
                title: "מקצועיות", 
                subtitle: "ידע מעמיק וניסיון רב" 
              },
              { 
                number: 2, 
                title: "יושרה", 
                subtitle: "שקיפות מלאה בכל התהליך" 
              },
              { 
                number: 3, 
                title: "מחויבות", 
                subtitle: "דאגה אמיתית ללקוח" 
              },
              { 
                number: 4, 
                title: "אמינות", 
                subtitle: "הבטחות שאנחנו מקיימים" 
              },
              { 
                number: 5, 
                title: "מצוינות", 
                subtitle: "תוצאות מעולות תמיד" 
              }
            ].map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">{item.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-base text-gray-600 max-w-32 text-center leading-relaxed">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Recommendations Section - 40% screen height */}
      <section className="h-[40vh] py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">המלצות לקוחות</h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-800 hover:scale-105 z-10"
              style={{ top: 'calc(50% - 20px)' }}
              aria-label="Previous recommendations"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-800 hover:scale-105 z-10"
              style={{ top: 'calc(50% - 20px)' }}
              aria-label="Next recommendations"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Recommendations Display */}
            <div className="flex gap-8 justify-center">
              {getVisibleRecommendations().map((rec, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg max-w-xs text-center">
                  <p className="text-gray-600 mb-4 italic">"{rec.text}"</p>
                  <h4 className="font-semibold text-gray-800">{rec.name}</h4>
                  <p className="text-gray-500 text-sm">{rec.company}</p>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to recommendation ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">עו"ד קובי כהן</h3>
            <p className="text-gray-300">מומחה במשפט אזרחי ומסחרי</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">צור קשר</h4>
              <p className="text-gray-300">טלפון: 03-1234567</p>
              <p className="text-gray-300">אימייל: kobi@lawyer.co.il</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">כתובת</h4>
              <p className="text-gray-300">רחוב הרצל 123</p>
              <p className="text-gray-300">תל אביב, ישראל</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">שעות פעילות</h4>
              <p className="text-gray-300">א'-ה': 9:00-18:00</p>
              <p className="text-gray-300">ו': 9:00-13:00</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">&copy; 2024 עו"ד קובי כהן. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
