export default function PracticeAreas() {
  const specialities = [
    {
      title: "יישוב סכסוכים וליטיגציה",
      description: "פתרון סכסוכים מחוץ לכתלי בית המשפט וליטיגציה מקצועית",
      icon: "⚖️",
      slug: "contracts"
    },
    {
      title: "משפט מסחרי",
      description: "חברות, עסקים ועסקאות מסחריות",
      icon: "🏢",
      slug: "labor-law"
    },
    {
      title: "נדל״ן",
      description: "עסקאות נדל״ן, פיתוח והשקעות",
      icon: "🏠",
      slug: "torts"
    },
    {
      title: "גבייה והוצאה לפועל",
      description: "גביית חובות והוצאה לפועל מקצועית",
      icon: "💰",
      slug: "commercial-law"
    },
    {
      title: "צוואות ויפוי כח מתמשך",
      description: "תכנון עזבון ויפוי כוח מתמשך",
      icon: "📜",
      slug: "family-law"
    },
    {
      title: "דיני מקרקעין",
      description: "רכישת נכסים ועסקאות מקרקעין",
      icon: "🏘️",
      slug: "real-estate"
    }
  ];

  return (
    <div className="font-sans" dir="rtl">
      {/* Hero Section - 30% screen height with background photo */}
      <section className="h-[30vh] relative bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-4">תחומי התמחות</h1>
          <p className="text-lg sm:text-xl lg:text-2xl">מומחיות במגוון רחב של תחומים משפטיים</p>
        </div>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Main Speciality Section - 50% screen width layout */}
      <section className="py-16 bg-gray-50">
        <div className="w-full 2xl:px-20 xl:px-10 px-4">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Text content - Left side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">מומחיות משפטית</h2>
              
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  המשרד שלי מתמחה במגוון רחב של תחומים משפטיים, עם ניסיון של למעלה מ-15 שנה 
                  בפתרון בעיות משפטיות מורכבות.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  אני מאמין שכל מקרה הוא ייחודי ודורש גישה מותאמת אישית. המשרד מספק 
                  שירות משפטי מקצועי ואמין לכל לקוח, תוך שמירה על האינטרסים שלהם.
                </p>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  עם מומחיות בתחומים השונים, אני מסוגל לספק פתרונות מקיפים ומקצועיים 
                  לכל בעיה משפטית שעומדת בפני הלקוחות שלי.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">ניסיון של 15+ שנים</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">גישה אישית לכל לקוח</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">מומחיות בתחומים השונים</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <span className="text-gray-700 font-medium">שירות מקצועי ואמין</span>
                </div>
              </div>
            </div>
            
            {/* Picture - Right side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg h-96 bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-600 text-lg">תמונה של עו&ldquo;ד קובי בעבודה</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Specialities Section */}
      <section className="py-16 bg-white">
        <div className="w-full 2xl:px-20 xl:px-10 px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">תחומי התמחות נוספים</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialities.map((speciality, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {speciality.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {speciality.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{speciality.description}</p>
                  
                  {/* Learn More Button */}
                  <a href={`/practice-areas/${speciality.slug}`} className="inline-block bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium">
                    למידע נוסף
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 