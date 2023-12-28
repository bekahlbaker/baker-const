import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Baker Remodel and Restoration | Transforming Spaces in East Texas with Expert Craftsmanship",
  description:
    "Discover expert craftsmanship with Baker Remodel and Restoration in Canton, TX. Transform your space with our meticulous remodeling and restoration services. From home renovations to insurance restoration, trust Baker for quality construction that tells a story. Your dream space begins here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
