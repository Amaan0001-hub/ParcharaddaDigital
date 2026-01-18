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
  title: "Digtek - Digital Marketing Agency",
  description:
    "Digital marketing agency providing SEO, social media, and digital advertising services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
