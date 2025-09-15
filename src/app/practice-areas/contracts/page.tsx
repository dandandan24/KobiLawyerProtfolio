import Image from "next/image";
export default function ContractsPage() {
  return (
    <div className="font-sans" dir="rtl">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="h-[40vh] relative flex items-center justify-center" style={{ backgroundImage: "url('/Skyline.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-center text-white z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">יישוב סכסוכים וליטיגציה</h1>
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="2xl:max-w-none 2xl:px-20 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-0">
            {/* Text content - Left side on desktop, above image on mobile */}
            <div className="w-full lg:w-2/5 lg:ml-30 lg:mr-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 hidden lg:block">יישוב סכסוכים וליטיגציה</h2>
              
              <div className="space-y-4 lg:space-y-6 px-6 lg:px-0">
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                ייצוג לקוחות בהתדיינויות אזרחיות בתחומים שונים לרבות; מחלוקות עסקיות הנובעות מהפרות חוזה, מתן שירותים לקויים, תביעות לפיצויים, סכסוכים כספיים, סכסוכים בין שותפים, תביעות בענייני מסחר, אנרגיה, אשראי ומימון חוץ בנקאי, נדל&ldquo;ן, תיווך וכיו&ldquo;ב. <br></br>
                <br></br>
משרדנו מלווה תאגידים ויחידים, בסכסוכים מסחריים מורכבים, החל מגיבוש האסטרטגיה המשפטית והשלבים המקדמיים, עריכת כתבי טענות מוקפדים, ייצוג בערכאות ועד לסיומו של ההליך המשפטי, לרבות יישוב סכסוכים, בדרך של בוררות, פשרה או גישור.<br></br>
<br></br>
לקובי ניסיון רב בייצוג ובליווי משפטי בסכסוכים משפטיים והוא מטפל בכל תיק תוך מתן תשומת לב לפרטים, לחדשנות, ליצירתיות ותוך התעדכנות שוטפת בכל החידושים המשפטיים במטרה להשיג ללקוחות תוצאות מיטביות.<br></br>
                </p>
              </div>
              
              {/* Services */}
            
            </div>

            {/* Mobile: Image below text */}
            <div className="lg:hidden w-full mt-6">
              <Image
                src="/specialitisimages/litigation.png"
                alt="conflictSolving"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
            
            {/* Picture - Right side (Desktop only) */}
            <div className="hidden lg:flex lg:w-3/5 justify-center">
            <Image
                src="/specialitisimages/litigation.png"
                alt="conflictSolving"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />           
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar */}
      <section className="py-8 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">תחומי התמחות נוספים</h2>
        <div className="max-w-7xl mx-auto 2xl:max-w-none 2xl:px-20 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/practice-areas/contracts" 
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium border-2 border-gray-800 text-lg"
            >
              יישוב סכסוכים וליטיגציה
            </a>
            <a 
              href="/practice-areas/labor-law" 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-lg"
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
            
          </div>
        </div>
      </section>
    </div>
  );
} 