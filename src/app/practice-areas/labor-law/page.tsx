export default function LaborLawPage() {
  return (
    <div className="font-sans" dir="rtl">
      {/* Hero Section */}
      <section className="h-[30vh] relative bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">משפט מסחרי</h1>
          <p className="text-lg sm:text-xl lg:text-2xl">חברות, עסקים ועסקאות מסחריות</p>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Text content - Left side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">מומחיות במשפט מסחרי</h2>
              
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  משפט מסחרי הוא תחום מרכזי בעבודתי המשפטית. אני מתמחה בייצוג חברות ועסקים 
                  במגוון רחב של נושאים מסחריים ועסקאות מורכבות.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  המשרד שלי מספק שירותים מקיפים בתחום המשפט המסחרי, כולל ייעוץ משפטי, 
                  ניסוח הסכמים מסחריים, הקמת חברות וניהול עסקאות מורכבות.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  עם ניסיון של למעלה מ-15 שנה, אני מכיר היטב את החקיקה והפסיקה 
                  בתחום המשפט המסחרי ומספק פתרונות מקצועיים ואפקטיביים.
                </p>
              </div>
              
              {/* Services */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">שירותי המשרד</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">ייצוג חברות ועסקים</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">ניסוח הסכמים מסחריים</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">הקמת חברות וניהול מבנה</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">ניהול עסקאות מסחריות מורכבות</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Picture - Right side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg h-96 bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-600 text-lg">תמונה של משפט מסחרי</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="py-8 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">תחומי התמחות נוספים</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/practice-areas/contracts" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
            >
              יישוב סכסוכים וליטיגציה
            </a>
            <a 
              href="/practice-areas/labor-law" 
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border-2 border-gray-800 text-lg"
            >
              משפט מסחרי
            </a>
            <a 
              href="/practice-areas/torts" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
            >
              נדל״ן
            </a>
            <a 
              href="/practice-areas/commercial-law" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
            >
              גבייה והוצאה לפועל
            </a>
            <a 
              href="/practice-areas/family-law" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
            >
              צוואות ויפוי כח מתמשך
            </a>
            <a 
              href="/practice-areas/real-estate" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
            >
              דיני מקרקעין
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 