import { Saira } from "next/font/google";
import "../globals.css";

const inter = Saira({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
