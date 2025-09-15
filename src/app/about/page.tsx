import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans" dir="rtl">
      {/* About Section - Full screen height minus navbar */}
      <section className="min-h-[calc(112vh-60px)] bg-gray-50">
        <div className="w-full min-h-full flex flex-col lg:flex-row items-stretch gap-16">
          {/* Mobile: Image at top, 60% screen height, full width */}
          <div className="lg:hidden w-full h-[60vh]">
            <Image
              src="/971A3651.jpg"
              alt="Attorney Kobi Rosenberg"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
              style={{
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>

          {/* Text content - Expanded with more details */}
          <div className="flex-1 lg:p-12 -mt-5 lg:mt-0 lg:h-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 lg:mb-6 text-center lg:text-right">אודותיי</h1>
            
            <div className="space-y-4 lg:space-y-6 px-6 lg:px-0 lg:h-[calc(100%-4rem)] lg:overflow-y-auto pb-8 lg:pb-0">
            <p className="xl:text-md 2xl:text-lg text-gray-600 leading-relaxed mb-4 text-justify lg:text-justify sm:text-center" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            תחומי עיסוקו המרכזיים של המשרד כוללים ליטיגציה אזרחית – מסחרית, בין השאר בסכסוכים עסקיים מורכבים ותובענות בין שותפים עסקיים, נדל"ן, חוזים מסחריים, גבייה והוצאה לפועל.<br></br>
לאורך שלשה עשורים של פעילות מקצועית קובי הופיע במאות רבות של דיונים בבתי משפט בכל הערכאות, בבוררויות ובגישורים מגוונים, וצבר מיומנויות בבנייה והתוויה של אסטרטגיה משפטית, גיבוש וכתיבה של כתבי טענות יסודיים ומעמיקים, ניהול חקירות ודיונים והובלת תיקים מורכבים בסביבה דינמית ותחרותית, עד לקבלת תוצאה מיטבית ללקוחותיו.<br></br><br></br>
בנוסף להופעותיו בפני טריבונלים שונים קובי מלווה עסקאות נדל"ן מגוונות; דירות, מגרשים ומשרדים ומוביל את לקוחותיו החל משלב המו"מ ועריכת חוזים, דרך טיפול בהיבטים רגולטוריים ומימוניים ועד לרישום זכויות והשלמת העסקאות.<br></br>
בתחום החוזים והמשפטי המסחרי המשרד מייצג חברות, יזמים ופרטיים בעריכת הסכמים מסחריים מסוגים שונים ובליווי תהליכים עסקיים מתקדמים.<br></br><br></br>
קובי מחזיק בניסיון רב בניהול תיקי גבייה והוצאה לפועל לרבות טיפול במימוש משכונות, כינוס נכסים, גביה בפועל של חובות והובלת תהליכי אכיפה למיצוי זכויות לקוחות עסקיים ופרטיים גם יחד.<br></br>
קובי גם מייצג בנושאים הקשורים להעברה בין דורית של נכסים וזכויות, עריכת צוואות, ייצוג בענייני ירושה ועיזבון, יפוי כח מתמשך, נאמנויות והקדשים, ומעניק שירותים נוטריונים.<br></br>
כל לקוח זוכה לטיפול פרטני, תוך הקפדה על פרטים, מחויבות בלתי מתפשרת ללקוח והתוויית אסטרטגיה מותאמת אישית ללקוח.<br></br><br></br>
תפיסתו המקצועית של קובי מושתתת על יסודיות, הכנה משפטית קפדנית, זמינות גבוהה ויחס אישי ללקוח. קובי שואף לפתור סכסוכים משפטיים מחוץ לכתליי בית המשפט, אך לא יהסס לנקוט בכל הליך משפטי נדרש כדי לשמור על האינטרסים של לקוחותיו. הוא שם דגש על תוצאה מיטבית ללקוח – בין כתוצאה מהליך משפטי בבית משפט, בבוררות או בגישור – בין אם במסגרת ייעוץ עסקי, ובין טיפול בעסקאות נדל"ן מורכבות או בהליכי גבייה סבוכים.<br></br><br></br>
קובי מעמיד לרשות לקוחותיו רמה מקצועית גבוהה, אמינות, דיסקרטיות, והיכרות עמוקה עם מכלול הרבדים המשפטיים, העסקיים והאנושיים של כל תיק. ניסיונו ומחויבותו ללקוח מהווים בסיס איתן להשגת פתרונות יציבים וארוכי טווח לכל לקוח ולכל אתגר.

            </p> 
            </div>
            
            {/* Additional sections 
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
                  - מומחיות במשפט האזרחי והמסחרי
                </p>
              </div>
            </div> */}
          </div>
          
          {/* Desktop: Picture - Full height minus navbar */}
          <div className="hidden lg:flex flex-1 h-full">
            <Image
              src="/971A3651.jpg"
              alt="Attorney Kobi Rosenberg"
              width={1000}
              height={1000}
              className="w-full h-[calc(112vh-60px)] object-cover"
              priority
              style={{
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 