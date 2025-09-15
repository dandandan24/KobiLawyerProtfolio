'use client';

import Image from "next/image";
import { useScrollAnimation } from "./components/ScrollAnimationProvider";

export default function Home() {
  const { animatedElements } = useScrollAnimation();


  return (
    <div className="font-sans" dir="rtl">
      {/* Section 1: Hero Section - Full height on mobile, 70% on desktop */}
      <section className="h-screen md:h-[70vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat -mt-[73px] pt-[73px]" style={{ backgroundImage: "url('/HomePageBackGround.jpeg')" }}>
        <div className={`text-center text-white z-10 fade-in-up ${animatedElements.has('hero') ? 'visible' : ''}`} data-animate-id="hero">
          <h1 className="text-5xl md:text-5xl sm:text-3xl font-bold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">עו&ldquo;ד קובי רוזנברג</h1>
          <p className="text-xl md:text-xl sm:text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"> משפט אזרחי ומסחרי</p>
        </div>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Section 2: About Section - 100% screen height */}
      <section className="min-h-[80vh] py-20 bg-gray-50">
        <div className="w-full 2xl:px-20 xl:px-10 px-8 md:px-8 lg:px-8 xl:px-10 flex flex-col md:flex-row gap-8 md:gap-32 sm:gap-4">
          {/* Text content - 60% width */}
          <div className={`flex-1 pt-0 fade-in-up sm:max-w-full sm:overflow-hidden ${animatedElements.has('about') ? 'visible' : ''}`} data-animate-id="about">
            <h2 className="text-4xl md:text-4xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-right">אודות המשרד</h2>
            <ul className="text-xl md:text-xl sm:text-lg text-gray-600 leading-relaxed mb-4 text-justify md:text-justify sm:text-justify md:list-disc sm:list-none xl:pr-6" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              <li>המשרד הנו משרד בוטיק ותחומי עיסוקו המרכזיים כוללים ליטיגציה אזרחית – מסחרית, נדל&ldquo;ן, חוזים מסחריים, גבייה והוצאה לפועל.</li><br></br>
              <li>עו&ldquo;ד קובי רוזנברג בעל תואר ראשון במשפטים (LLB) מאוניברסיטת תל אביב וחבר לשכת עורכי הדין משנת 1995.</li><br></br>
              <li>כל לקוח זוכה לטיפול פרטני, תוך הקפדה על פרטים, מחויבות בלתי מתפשרת  והתוויית אסטרטגיה מותאמת אישית.</li><br></br>
              <li>תפיסתו המקצועית של קובי מושתתת על יסודיות, הכנה משפטית קפדנית, זמינות גבוהה ויחס אישי ללקוח.</li><br></br>
              <li>קובי מעמיד לרשות לקוחותיו רמה מקצועית גבוהה, אמינות, דיסקרטיות, והיכרות עמוקה עם מכלול הרבדים המשפטיים, העסקיים והאנושיים של כל תיק. ניסיונו ומחויבותו ללקוח מהווים בסיס איתן להשגת פתרונות יציבים וארוכי טווח לכל לקוח ולכל אתגר.</li>
            </ul>
          </div>
          {/* Picture - 40% width, 60% height */}
          <div className="flex-1 flex justify-center sm:max-w-full sm:overflow-hidden">
            <Image
              src="/kobiHomePageAbout.jpg"
              alt="Attorney Kobi Rosenberg"
              width={1000}
              height={1000}
              className="w-full 2xl:h-[650px] h-[600] md:h-[600] sm:h-[400px] object-cover rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 3: Specialities Section - 60% screen height */}
      <section className="2xl:h-[70vh] xl:h-[90vh] md:h-[90vh] sm:h-auto py-20 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className={`text-4xl md:text-4xl sm:text-3xl font-bold text-white mb-10 fade-in-up ${animatedElements.has('specialities-title') ? 'visible' : ''}`} data-animate-id="specialities-title">תחומי התמחות</h2>
              {/* Pyramid layout: 2 items above 3, aligned over gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-y-10 md:gap-x-6">
                {/* Top row: columns 2 and 4 */}
                {[
                  { title: "יישוב סכסוכים וליטיגציה", description: "ייצוג  בהתדיינויות אזרחיות ומסחריות בבתי משפט", svg: "/conflictssolving.svg" },
                  { title: "משפט מסחרי", description: "ליווי וייעוץ שוטף לחברות שונות בכל תחומי המשפט המסחרי", svg: "/commercial.svg" },
                ].map((item, index) => (
                  <div
                    key={`top-${index}`}
                    className={`text-center fade-in-up md:row-start-1 ${index === 0 ? 'md:col-start-2' : 'md:col-start-4'} ${animatedElements.has(`speciality-top-${index}`) ? 'visible' : ''}`}
                    data-animate-id={`speciality-top-${index}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image src={item.svg} alt={`${item.title} Icon`} width={40} height={40} className="w-10 h-10 text-gray-800" />
                    </div>
                    <h3 className="text-xl md:text-xl sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white md:text-base sm:text-sm">{item.description}</p>
                  </div>
                ))}

                {/* Bottom row: columns 1, 3, 5 */}
                {[
                  { title: "נדל״ן", description: "עריכת הסכמי מכר, שכירות, משכנתאות, הלוואות", svg: "/realestate.svg" },
                  { title: "העברה בין דורית ושירותי נוטריון", description: "עריכת צוואות, יפוי כח מתמשך, הסכמים בין יורשים, נאמנויות ומתן שירותים נוטריונים.", svg: "/contract.svg" },
                  { title: "גבייה והוצאה לפועל", description: "גביה וניהול הליכי הוצאה לפועל עבור פרטים וחברות", svg: "/gvia.svg" },
                ].map((item, index) => (
                  <div
                    key={`bottom-${index}`}
                    className={`text-center fade-in-up md:row-start-2 ${index === 0 ? 'md:col-start-1' : index === 1 ? 'md:col-start-3' : 'md:col-start-5'} ${animatedElements.has(`speciality-bottom-${index}`) ? 'visible' : ''}`}
                    data-animate-id={`speciality-bottom-${index}`}
                    style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image src={item.svg} alt={`${item.title} Icon`} width={40} height={40} className="w-10 h-10 text-gray-800" />
                    </div>
                    <h3 className="text-xl md:text-xl sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white md:text-base sm:text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
        </div>
      </section>

      {/* Section 4: Beliefs Section - 40% screen height */}
      {/* <section className="h-[60vh] py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-16">ערכי המשרד</h2>
          <div className="flex justify-between items-start mb-8 px-8">
            {/* 5 circular logos spread across full width 
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
      </section> */}

      {/* Recommendations Section removed */}
    </div>
  );
}
