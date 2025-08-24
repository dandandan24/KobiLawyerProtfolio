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
      <section className="h-[70vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/HomePageBackGround.jpeg')" }}>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">עו"ד קובי רוזנברג</h1>
          <p className="text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">מומחה במשפט אזרחי ומסחרי</p>
        </div>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Section 2: About Section - 100% screen height */}
      <section className="min-h-[80vh] py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex items-start gap-16">
          {/* Text content - 60% width */}
          <div className="flex-1 pt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">אודותיי</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
            עו"ד קובי רוזנברג בעל תואר ראשון במשפטים (LLB) מאוניברסיטת תל אביב וחבר לשכת עורכי הדין משנת 1995.<br></br>
לאורך שלשה עשורים של פעילות הופעתי במאות רבות של דיונים בבתי משפט בכל הערכאות, בבוררויות ובגישורים מגוונים, וצברתי מיומנויות בבנייה והתוויה של אסטרטגיה משפטית, גיבוש וכתיבה של כתבי טענות יסודיים ומעמיקים, ניהול חקירות ודיונים והובלת תיקים מורכבים בסביבה דינמית ותחרותית, עד לקבלת תוצאה מיטבית ללקוחותיי.<br></br>
תפיסתי המקצועית מושתתת על יסודיות, הכנה משפטית קפדנית, זמינות גבוהה ויחס אישי ללקוח. אני שואף לפתור סכסוכים משפטיים מחוץ לכתליי בית המשפט, אך לא אהסס לנקוט בכל הליך משפטי נדרש כדי לשמור על האינטרסים של לקוחותיי.<br></br>
 אני שם דגש על תוצאה מיטבית ללקוח – בין כתוצאה מהליך משפטי בבית משפט, בבוררות או בגישור – בין אם במסגרת ייעוץ עסקי, ובין טיפול בעסקאות נדל"ן מורכבות או בהליכי גבייה סבוכים.<br></br>
אני מעמיד לרשות לקוחותיי רמה מקצועית גבוהה, אמינות, דיסקרטיות, והיכרות עמוקה עם מכלול הרבדים המשפטיים, העסקיים והאנושיים של כל תיק. ניסיוני ומחויבותי ללקוח מהווים בסיס איתן להשגת פתרונות יציבים וארוכי טווח לכל לקוח ולכל אתגר.
            </p>
          </div>
          {/* Picture - 40% width, 60% height */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/HomePageAboutImage.jpeg"
              alt="Attorney Kobi Rosenberg"
              width={320}
              height={384}
              className="w-auto h-[650px] object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 3: Specialities Section - 60% screen height */}
      <section className="h-[80vh] py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">תחומי התמחות</h2>
          <div className="grid grid-cols-3 gap-12">
            {/* 6 speciality items */}
            {[
              { title: "יישוב סכסוכים וליטיגציה", description: "משפט שמתאר את העיסוק בכל תחום" },
              { title: "משפט מסחרי", description: "משפט שמתאר את העיסוק בכל תחום" },
              { title: "נדל״ן", description: "משפט שמתאר את העיסוק בכל תחום" },
              { title: "גבייה והוצאה לפועל", description: "משפט שמתאר את העיסוק בכל תחום" },
              { title: "צוואות ויפוי כח מתמשך", description: "משפט שמתאר את העיסוק בכל תחום" },
              { title: "דיני מקרקעין", description: "משפט שמתאר את העיסוק בכל תחום" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Beliefs Section - 40% screen height */}
      <section className="h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">ערכי המשרד</h2>
          <div className="flex justify-between items-start mb-8 px-8">
            {/* 5 circular logos spread across full width */}
            {[
              { 
                number: 1, 
                title: "יסודיות", 
                subtitle: "אני מבצע את עבודתי בצורה מדויקת ובקפדנות מקצועית יתרה" 
              },
              { 
                number: 2, 
                title: "אסטרטגיה משפטית", 
                subtitle: "התווית אסטרטגיה משפטית מותאמת לכל מקרה" 
              },
              { 
                number: 3, 
                title: "יחס אישי", 
                subtitle: "אני תמיד זמין ללקחותיי ומטפל בכל בעיה בסבלנות רבה" 
              },
              { 
                number: 4, 
                title: "פתרון סכסוכים", 
                subtitle: "הבאת פתרונות יצירתיים המבוססים על גישה מעשית" 
              },
              { 
                number: 5, 
                title: "מחויבות אישית", 
                subtitle: "אני מחויב ללקוחותיי באופן בלתי מתפשר"
              }
            ].map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">{item.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-base text-gray-600 max-w-40 text-center leading-relaxed">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Recommendations Section - 40% screen height */}
      <section className="h-[50vh] py-16 bg-white">
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
    </div>
  );
}
