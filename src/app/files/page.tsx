'use client';

import { useState, useEffect } from 'react';

interface FileItem {
  id: number;
  title: string;
  description: string;
  fileName: string;
  category: string;
}

export default function Files() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countersStarted, setCountersStarted] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Counter animation function
  const animateCounter = (elementId: string, targetValue: number, duration: number = 2000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart);
      
      element.textContent = currentValue.toString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = targetValue.toString();
      }
    };

    requestAnimationFrame(updateCounter);
  };

  // Start counters when component mounts
  useEffect(() => {
    if (!countersStarted) {
      setCountersStarted(true);
      
      // Start all counters with slight delays
      setTimeout(() => animateCounter('experience-counter', 30), 500);
      setTimeout(() => animateCounter('cases-counter', 100), 1000);
      setTimeout(() => animateCounter('success-counter', 90), 1500);
    }
  }, [countersStarted]);

  // Hide scroll indicator when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Hide after scrolling 100px
        setIsFadingOut(true);
      } else {
        setIsFadingOut(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const files: FileItem[] = [
    {
      id: 1,
      title: " אילן ששון נגד דוד וצורי בעמ",
      description: "דחיית התנגדות לביצוע שטר בשל חוסר תום לב והגנת בדים של החייב",
      fileName: "sample-contract.pdf.html",
      category: "contracts"
    },
    {
      id: 2,
      title: "מ.ב. נגד ד.ב",
      description:"קבלת בקשה לסילוק על הסף של תובענה שהוגשה לבית המשפט לענייני משפחה, בטענות התיישנות, שיהוי, חוסר תום לב ושימוש לרעה בהליכי משפט.",
      fileName: "real-estate-ruling.pdf",
      category: "family-law"
    },
    {
      id: 3,
      title: "אורה שאול אריכה נגד עוד עודד ישראלי",
      description: "סילוק על הסף של רשות ערעור שהוגשה לבית המשפט המחוזי על החלטת ביניים של בורר בשל הגשת הערעור שלא על פי המנגנונים שקבועים בחוק הבוררות, תשכח – 1968.",
      fileName: "execution-ruling.pdf",
      category: "execution"
    },
    {
      id: 5,
      title: "יפוי כח מתמשך",
      description: "פסק דין בעניין יפוי כח מתמשך עם נימוקים",
      fileName: "power-of-attorney-ruling.pdf",
      category: "wills"
    },
    {
      id: 6,
      title: "סטארלנד השקעות ויזמות בעמ נגד לילך מויאל אלחרר ואח'",
      description: "ה'גורם היעיל' ו'דרישת הכתב' בתביעת מתווך שהתקבלה לתשלום דמי תיווך בהתאם לחוק המתווכים במקרקעין, תשנו 1999.",
      fileName: "mediation-ruling.pdf",
      category: "mediation"
    },
    {
      id: 7,
      title: "תמיר כספי ואח' נגד ערן סיגטי ואח'",
      description: "דחיית טענות ליריבות ואחריות אישית של מנהלי חברה במסגרת תביעה להפרת התחייבות ולהתרשלות באספקת שירות.",
      fileName: "arbitration-ruling.pdf",
      category: "arbitration"
    },
    {
      id: 8,
      title: "שמחה ברק נגד משה גיל מלכה",
      description: "חיוב מנהל ובעלים של חברות שעסקו בהשקעות בתחום הפורקס בתביעה להשבת כספים בסך 1.75 משח, בין השאר בשל עירוב כספים בין החברות הנתבעות, שימוש אישי של בעל החברה בכספי המשקיע ואי גילוי למשקיע אודות שינויי רגולציה והשפעתם האפשרית על המשך פעילות המסחר של החברות הנתבעות.",
      fileName: "employment-ruling.pdf",
      category: "arbitration"
    }
  ];



  const handleFileClick = (file: FileItem) => {
    setSelectedFile(file);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className="font-sans" dir="rtl">
      {/* Hero Section */}
      <section className="h-[50vh] relative flex items-center justify-center" style={{ backgroundImage: "url('/supremeCourt.jpeg')", backgroundSize: 'cover', backgroundPosition: '40% 60%' }}>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">פסקי דין</h1>
          <p className="text-lg sm:text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">הורדת פסקי דין תקדימים משפטיים מקצועיים</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Files Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          {/* Statistics Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white" id="experience-counter">0</div>
                </div>
                <div className="text-lg text-gray-600">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white" id="cases-counter">0</div>
                </div>
                <div className="text-lg text-gray-600">תיקים שנסגרו</div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white" id="success-counter">0</div>
                </div>
                <div className="text-lg text-gray-600">אחוזי הצלחה</div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div 
              className={`text-center mt-8 transition-all duration-500 ${
                isFadingOut 
                  ? 'opacity-0 -translate-y-4 pointer-events-none' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <p className="text-xl font-semibold text-gray-800 mb-4">לעיון בפסקי הדין</p>
              <div className="animate-bounce">
                <svg className="w-8 h-8 text-gray-800 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {files.map((file, index) => (
              <div 
                key={file.id} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-gray-800 transform hover:-translate-y-2 flex flex-col h-full"
                onClick={() => handleFileClick(file)}
              >
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{file.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">{file.description}</p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      לחץ לצפייה
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* PDF Preview Modal */}
      {isModalOpen && selectedFile && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Close Button - Floating */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-70 text-2xl font-bold p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            ×
          </button>
          
          {/* PDF Viewer - Full Screen */}
          <iframe
            src={`/files/example.pdf`}
            className="w-full h-full"
            title={selectedFile.title}
          />
        </div>
      )}
    </div>
  );
}
