'use client';

import { useState } from 'react';

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
  

  const files: FileItem[] = [
    {
      id: 1,
      title: " אילן ששון נגד דוד וצורי בעמ",
      description: "דחיית התנגדות לביצוע שטר בשל חוסר תום לב והגנת בדים של החייב",
      fileName: "file1.pdf.html",
      category: "contracts"
    },
    {
      id: 2,
      title: "מ.ב. נגד ד.ב",
      description:"קבלת בקשה לסילוק על הסף של תובענה שהוגשה לבית המשפט לענייני משפחה, בטענות התיישנות, שיהוי, חוסר תום לב ושימוש לרעה בהליכי משפט.",
      fileName: "file2.pdf",
      category: "family-law"
    },
    {
      id: 3,
      title: "אורה שאול אריכה נגד עוד עודד ישראלי",
      description: "סילוק על הסף של רשות ערעור שהוגשה לבית המשפט המחוזי על החלטת ביניים של בורר בשל הגשת הערעור שלא על פי המנגנונים שקבועים בחוק הבוררות, תשכח – 1968.",
      fileName: "file3.pdf",
      category: "execution"
    },
    {
      id: 4,
      title: "סטארלנד השקעות ויזמות בעמ נגד לילך מויאל אלחרר ואח'",
      description: "ה'גורם היעיל' ו'דרישת הכתב' בתביעת מתווך שהתקבלה לתשלום דמי תיווך בהתאם לחוק המתווכים במקרקעין, תשנו 1999.",
      fileName: "file4.pdf",
      category: "mediation"
    },
    {
      id: 5,
      title: "תמיר כספי ואח' נגד ערן סיגטי ואח'",
      description: "דחיית טענות ליריבות ואחריות אישית של מנהלי חברה במסגרת תביעה להפרת התחייבות ולהתרשלות באספקת שירות.",
      fileName: "file5.pdf",
      category: "arbitration"
    },
    {
      id: 6,
      title: "עוד ארז דרורי נגד שלום ביטון",
      description: "ייצוג עורך דין בתביעה כנגד לקוחו בהתאם להסכם שכר טרחה שנחתם בין הצדדים ודחיית טענות הנתבע בדבר פגם ברצון, הטעיה, עושק וכו'.",
      fileName: "file6.pdf",
      category: "arbitration"
    },
    {
      id: 7,
      title: "שמחה ברק נגד משה גיל מלכה",
      description: "חיוב מנהל ובעלים של חברות שעסקו בהשקעות בתחום הפורקס בתביעה להשבת כספים בסך 1.75 משח, בין השאר בשל עירוב כספים בין החברות הנתבעות, שימוש אישי של בעל החברה בכספי המשקיע ואי גילוי למשקיע אודות שינויי רגולציה והשפעתם האפשרית על המשך פעילות המסחר של החברות הנתבעות.",
      fileName: "file7.pdf",
      category: "arbitration"
    },
    {
      id: 8,
      title: "חופרי ערוער 1996 בעמ נגד דניאל חגבי",
      description: "קבלת ערעור על פסק דין בו חויב המשיב לשלם למערער בגין עבודות עפר שביצעה עבורו, וחיוב המשיב לשלם למערערת את מלוא חובו אליה.",
      fileName: "file8.pdf",
      category: "arbitration"
    },
    {
      id: 9,
      title: "Slovk Finance Group  נגד י.ת. עזדן 2001 בעמ",
      description: "קבלת תביעה עס 1.87 משח שהוגשה בגין סכסוך בין שותפים למיזם משותף שעסק במימון עסקאות יבוא/יצוא.",
      fileName: "file9.pdf",
      category: ""
    },
    {
      id: 10,
      title: "ד.כ. חנויות להשכרה בהרצליה הצעירה בעמ נגד חברת אברהם כהן ושות' חברה קבלנית בעמ (בכינוס נכסים ופירוק)",
      description: "סכסוך בין בעלי זכויות ביחס לחנות בהרצליה ושאלת התחרות בין הזכויות על פי 'הערת אזהרה' לבין זכויות נושים אחרים.",
      fileName: "file10.pdf",
      category: "arbitration"
    },
    {
      id: 11,
      title: "רזגל אנרגיה בעמ נגד דלק חברת הדלק הישראלית בעמ – פסק דין חלקי",
      description: "פסק דין בתביעה למתן חשבונות שהוגשה על ידי התובעת, רזגל אנרגיה בעמ, כנגד דלק, חברת הדלק הישראלית, מכוחו חויבה דלק במתן חשבונות לתובעת וקבלת עמדת התובעת לגבי פרשנות ההסכם שבין הצדדים.",
      fileName: "file11.pdf",
      category: "arbitration"
    },
    {
      id: 12,
      title: "נ.מ. נכסים מניבים בעמ נגד ברדה ואח'",
      description: "קבלת תביעה לתשלום דמי ניהול מבעלי נכסים במרכז מסחרי בצורן.",
      fileName: "file12.pdf",
      category: "arbitration"
    },
    {
      id: 13,
      title: "תקווה כפר להכשרה מקצועית בגבעות זייד בעמ ואח' נגד אריה פינקוביץ ואח'",
      description: "הפרת חובות הזהירות של דירקטורים לנזקי חברת התקווה – כפר חוסים, בגין העברות כספי מהחברה לחברת הבת שלה, וחיוב המבטחת בנזקים שנגרמו כתוצאה מרשלנות הדירקטורים.",
      fileName: "file13.pdf",
      category: "arbitration"
    },
    {
      id: 14,
      title: "יוסף גדעוני נגד ארמונות חן בעמ",
      description: "דחיית תביעה עס 834,000 ₪ שהוגשה על ידי מתווך. נקבע כי המתווך לא הוכיח כי היה הגורם היעיל בהתקשרות בין הנתבעים לבעלי המקרקעין.",
      fileName: "file14.pdf",
      category: "arbitration"
    },
    {
      id: 15,
      title: "יהושע אנידג'ר ואח' נגד כאן גולן חברה לפיתוח ולהובלות בעמ",
      description: "דחיית תביעת בעלי נכסים שטענו כי העברת זכויות ניהול במרכז מסחרי נעשתה בניגוד להסכמי ניהול ודחיית דרישתם לקבוע דמי ניהול שונים מאלה שבהם הם מחויבים.",
      fileName: "file15.pdf",
      category: "arbitration"
    },
    {
      id: 16,
      title: "י.ת. עזדן 2001 בעמ נגד Slovak",
      description: "דחיית ערעור בשל אי התערבות ערכאת הערעור בממצאים עובדתיים, וביסוס טענת חוסר תום הלב של המערערים שטענו להפרת החייבות עי המשיבה מחד ולהיעדר יריבות עמה, מאידך.",
      fileName: "file16.pdf",
      category: "arbitration"
    },
    {
      id: 17,
      title: "ויקטוריה גבריאל נגד המרכז לשיקום רפואי בעמ",
      description: "הרמת מסך ההתאגדות וקבלת טענות עובדות לחיוב אישי של מנהלת החברה שהעסיקה אותן בגין אי תשלום שכרן ועירוב נכסים",
      fileName: "file17.pdf",
      category: "arbitration"
    },
    {
      id: 18,
      title: "ג.ד נגד נ.ד.",
      description: "קבלת תביעה לסילוק יד של הנתבעים ממשק שהתובע קיבל את זכויות 'בר הרשות' בו במתנה מאמו, והתנהגות מחפירה של הנתבעים כנגד האם שהצדיקה את חזרת האם מהתחייבות למתן מתנה.",
      fileName: "file18.pdf",
      category: "arbitration"
    },
    {
      id: 19,
      title: "Zhejiang Hangecha Engineering Machinery Co Ltd נגד ר.ח. פורקליפט והשקעות בעמ'",
      description: "ביטול פסק דין מחובת הצדק וביטול היתר המצאה לחוייבות בגין קיומה של תניית שיפוט ייחודית.",
      fileName: "file19.pdf",
      category: "arbitration"
    },
    {
      id: 20,
      title: "היקרי נגד שגב",
      description: "דחיית ערעור על פסק דין שקבע כי על המערערת ליתן זכות מעבר למשיב בשטח חצרה.",
      fileName: "file20.pdf",
      category: "arbitration"
    },
    {
      id: 21,
      title: "בנק למסחר בעמ (בפירוק) נגד פרוספר נשיונל פיננס חברה פיננסית בעמ",
      description: "קבלת תביעה של בנק שנמצא בהליך של פירוק ודחיית טענת הנתבעים כי אין לחייבם בחוב הפסוק בשל המעילה שבוצעה בבנק.",
      fileName: "file21.pdf",
      category: "arbitration"
    },
    {
      id: 22,
      title: "שלום דביר נגד עו'ד מאיר נוימן",
      description: "תביעה שהוגשה על ידי כנגד עורך דין בגין רשלנות מקצועית בטיפולו בעניינם הנוגע לרכישת דירה.",
      fileName: "file22.pdf",
      category: "arbitration"
    },
    {
      id: 23,
      title: "יצחק צבי נגד אינסטרומטריקס בקרה תעשיתית בעמ",
      description: "דחיית תביעה לתשלום פיצויי פיטורין לאחר שהתובע לא הוכיח כי התפטרותו נבעה מהעתקת מקום מגוריו.",
      fileName: "file23.pdf",
      category: "arbitration"
    },
    {
      id: 24,
      title: "טרילוג נגד רשות הטבע והגנים ואח'",
      description: "דחיית עתירה מנהלית שהוגשה בגין זכייתה של המשיבה 2 במכרז לתכנון קירוי כניסה בגן הלאומי כורסי וקביעה, שבהיעדר תנאי כי המציע במכרז יהיה קבלן רשום אין מניעה כי חלק מהעבודות יועברו לביצועה של חברה אחות.",
      fileName: "file24.pdf",
      category: "arbitration"
    },
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
        <div className="width-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
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
          
          {/* Document Viewer - Full Screen */}
          <iframe
            src={`/files/${selectedFile.fileName}`}
            className="w-full h-full"
            title={selectedFile.title}
          />
        </div>
      )}
    </div>
  );
}
