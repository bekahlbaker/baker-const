import Hero from "../components/Hero/hero";
import Head from "next/head";
import { Saira } from "next/font/google";

const inter = Saira({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>
          Baker Remodel and Restoration | Transforming Spaces in East Texas with
          Expert Craftsmanship
        </title>
      </Head>
      <Hero />
    </div>
  );
}
