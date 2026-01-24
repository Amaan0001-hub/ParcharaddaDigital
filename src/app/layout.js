// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";
// import "./custom-css.css";
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-plus-jakarta",
//   display: "swap",
// });

// export const metadata = {
//   title: "Prachaaradda : Social Media Marketing Agency",
//   description:
//     "Digital marketing agency providing SEO, social media, and digital advertising services",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={plusJakarta.variable}>
//       <body className={plusJakarta.className}>{children}</body>
//     </html>
//   );
// } 

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./custom-css.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Prachaaradda : Social Media Marketing Agency",
  description:
    "Digital marketing agency specializing in Social Media Management, ADS Management, and Branding & Identity Design services.",

  // ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Prachaaradda : Social Media Marketing Agency",
    description:
      "Digital marketing agency specializing in Social Media Management, ADS Management, and Branding & Identity Design services.",
    url: "https://prachaaradda.vercel.app", // 🔥 apni website URL
    siteName: "Prachaaradda",
    images: [
      {
        url: "https://prachaaradda.vercel.app/img/PA.png", // 🔥 public folder image
        width: 1200,
        height: 630,
        alt: "Prachaaradda Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Prachaaradda : Social Media Marketing Agency",
    description:
      "SEO, Social Media Marketing & Digital Ads to boost your business.",
    images: ["https://parcharadda.com/og-image.jpg"],
  },

  // (optional but good)
  keywords: [
    "Social Media Management",
    "ADS Management",
    "Branding & Identity Design",
    "Video and Photo Editing",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}

