import { Saira } from "next/font/google";
import "../globals.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const inter = Saira({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
