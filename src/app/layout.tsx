import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { David_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollAnimationProvider } from "./components/ScrollAnimationProvider";
import { PageTransition } from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const davidLibre = David_Libre({
  variable: "--font-david-libre",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "עו\u201cד קובי רוזנברג | משפט אזרחי ומסחרי",
  description: "עו\u201cד קובי רוזנברג - ליטיגציה אזרחית ומסחרית, נדל\u201cן, גבייה והוצאה לפועל, משפט מסחרי ונוטריון. ניסיון של עשרות שנים בייצוג, ייעוץ וניהול הליכים." ,
  keywords: [
    "עו\u201cד קובי רוזנברג",
    "עורך דין",
    "ליטיגציה אזרחית",
    "משפט מסחרי",
    "נדל\u201cן",
    "גבייה והוצאה לפועל",
    "נוטריון",
    "עורך דין תל אביב",
    "יישוב סכסוכים",
    "עריכת חוזים",
    "קובי רוזנברג",
    "עורך דין"
  ],
  icons: {
    icon: [{ url: "/icon.svg?v=4", rel: "icon", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg?v=4", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg?v=4" }]
  },
  metadataBase: new URL("https://" + (process.env.NEXT_PUBLIC_SITE_DOMAIN || "example.com"))
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${davidLibre.variable} antialiased`}
      >
        <ScrollAnimationProvider>
          <Navbar />
          <PageTransition>
            {children}
            <Footer />
          </PageTransition>
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
