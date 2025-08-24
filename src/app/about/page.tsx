import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans" dir="rtl">
      {/* About Section - Full screen height minus navbar */}
      <section className="h-[calc(100vh-60px)] py-8 bg-gray-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 h-full">
          {/* Text content - Expanded with more details */}
          <div className="flex-1 pt-0 w-full lg:w-auto mr-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 lg:mb-8">אודותיי</h1>
            
            <div className="space-y-4 lg:space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
            עו"ד קובי רוזנברג בעל תואר ראשון במשפטים (LLB) מאוניברסיטת תל אביב וחבר לשכת עורכי הדין משנת 1995.<br></br>
לאורך שלשה עשורים של פעילות הופעתי במאות רבות של דיונים בבתי משפט בכל הערכאות, בבוררויות ובגישורים מגוונים, וצברתי מיומנויות בבנייה והתוויה של אסטרטגיה משפטית, גיבוש וכתיבה של כתבי טענות יסודיים ומעמיקים, ניהול חקירות ודיונים והובלת תיקים מורכבים בסביבה דינמית ותחרותית, עד לקבלת תוצאה מיטבית ללקוחותיי.<br></br>
תפיסתי המקצועית מושתתת על יסודיות, הכנה משפטית קפדנית, זמינות גבוהה ויחס אישי ללקוח. אני שואף לפתור סכסוכים משפטיים מחוץ לכתליי בית המשפט, אך לא אהסס לנקוט בכל הליך משפטי נדרש כדי לשמור על האינטרסים של לקוחותיי.<br></br>
 אני שם דגש על תוצאה מיטבית ללקוח – בין כתוצאה מהליך משפטי בבית משפט, בבוררות או בגישור – בין אם במסגרת ייעוץ עסקי, ובין טיפול בעסקאות נדל"ן מורכבות או בהליכי גבייה סבוכים.<br></br>
אני מעמיד לרשות לקוחותיי רמה מקצועית גבוהה, אמינות, דיסקרטיות, והיכרות עמוקה עם מכלול הרבדים המשפטיים, העסקיים והאנושיים של כל תיק. ניסיוני ומחויבותי ללקוח מהווים בסיס איתן להשגת פתרונות יציבים וארוכי טווח לכל לקוח ולכל אתגר.
            </p> 
            </div>
            
            {/* Additional sections */}
            <div className="mt-6 2xl:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">השכלה</h3>
                <p className="text-sm lg:text-base text-gray-600">
                  - תואר ראשון מאוניברסיטת תל אביב<br/>
                  - התמחות במשרד עורכי דין מוביל<br/>
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">ניסיון</h3>
                <p className="text-sm lg:text-base text-gray-600">
                  - 30+ שנות ניסיון בעריכת דין<br/>
                  - טיפול במאות תיקים מורכבים<br/>
                  - מומחיות במשפט האזרחי והמסחרי
                </p>
              </div>
            </div>
          </div>
          
          {/* Picture - Full height minus navbar */}
          <div className="flex-1 flex justify-center">
            <div className=" bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <Image
                src="/aboutImage.jpeg"
                alt="Attorney Kobi Rosenberg"
                width={320}
                height={384}
                className="w-auto h-[730px] object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 