import Hero from "../app/components/Hero/Hero";
import Head from "next/head";
import { Saira } from "next/font/google";
import Header from "../app/components/Header/Header";
import { useEffect } from "react";
import content from "../utils/api/content";
import HomeContentAreaOne from "../app/components/Home/ContentAreaOne";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../app/components/layout"), {
  ssr: false,
});

const inter = Saira({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    content.getHomePageContent().then((res) => console.log("HOME", res));
  }, []);

  return (
    <Layout>
      <div className={inter.className}>
        <Head>
          <title>
            Baker Remodel and Restoration | Transforming Spaces in East Texas
            with Expert Craftsmanship
          </title>
        </Head>
        <Header />
        <Hero />
        <HomeContentAreaOne />
      </div>
    </Layout>
  );
}
