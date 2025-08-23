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
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed 2xl:mb-8 xl:mb-0">
                אני עו"ד קובי רוזנברג, בעל ניסיון של למעלה מ-15 שנה בתחום המשפט האזרחי והמסחרי. 
                אני מתמחה בפתרון סכסוכים מורכבים ומספק ייעוץ משפטי מקצועי ואמין ללקוחותיי.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed 2xl:mb-8 xl:mb-0">
                המשרד שלי מתמחה במגוון רחב של תחומים משפטיים, כולל דיני חוזים, 
                דיני עבודה, נזיקין ומשפט מסחרי. אני מאמין בגישה אישית ומותאמת לכל לקוח.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed 2xl:mb-8 xl:mb-0">
                במהלך השנים, טיפלתי במאות תיקים מורכבים וזכיתי לאמון של לקוחות רבים. 
                אני מאמין שכל מקרה הוא ייחודי ודורש גישה מותאמת אישית.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed 2xl:mb-8 xl:mb-0">
                המשרד שלי מתמחה בפתרון בעיות משפטיות מורכבות תוך שמירה על האינטרסים 
                של הלקוח ועל המקצועיות הגבוהה ביותר. אני מתחייב לספק שירות משפטי 
                איכותי, מקצועי ואמין לכל לקוח.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed 2xl:mb-8 xl:mb-0">
                אני מאמין במקצועיות, יושרה ומחויבות ללקוח. כל מקרה מטופל בקפידה 
                ובגישה אישית, תוך שמירה על האינטרסים של הלקוח ועל המקצועיות 
                הגבוהה ביותר.
              </p>
            </div>
            
            {/* Additional sections */}
            <div className="mt-8 2xl:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white p-4 lg:p-6 rounded-md shadow-md">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">השכלה</h3>
                <p className="text-sm lg:text-base text-gray-600">
                  תואר ראשון במשפטים מאוניברסיטת תל אביב<br/>
                  התמחות במשרד עורכי דין מוביל<br/>
                  רישיון עריכת דין משנת 2009
                </p>
              </div>
              
              <div className="bg-white p-4 lg:p-6 rounded-md shadow-md">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">ניסיון</h3>
                <p className="text-sm lg:text-base text-gray-600">
                  15+ שנות ניסיון בעריכת דין<br/>
                  טיפול במאות תיקים מורכבים<br/>
                  מומחיות בתחום המשפט האזרחי והמסחרי
                </p>
              </div>
            </div>
          </div>
          
          {/* Picture - Full height minus navbar */}
          <div className="flex-1 flex justify-center">
            <div className="w-96 2xl:h-[800px] xl:h-[700px] bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-600 text-lg">תמונה של עו"ד קובי</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 