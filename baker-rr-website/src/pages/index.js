import Hero from "../app/components/Hero/Hero";
import Head from "next/head";
import { Saira } from "next/font/google";
import Header from "../app/components/Header/Header";
import { useEffect, useState } from "react";
import content from "../utils/api/content";
import HomeContentAreaOne from "../app/components/Home/ContentAreaOne";
import dynamic from "next/dynamic";
import HomeContentAreaTwo from "@/app/components/Home/ContentAreaTwo";
const Layout = dynamic(() => import("../app/components/layout"), {
  ssr: false,
});

const inter = Saira({ subsets: ["latin"] });

export default function Home() {
  const [fields, setFields] = useState({});

  useEffect(() => {
    content.getHomePageContent().then((res) => {
      setFields(res.fields);
    });
  }, [fields]);

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

        <HomeContentAreaOne
          photo={fields?.contentArea1Image?.fields?.file?.url}
          title={fields?.contentArea1Headline}
          subtitle={fields?.contentArea1SubHeadline}
          text={fields?.contentArea1Paragraph}
        />
        <HomeContentAreaTwo
        title="Residential Construction Services"
        subtitle="We specialize in new construction, remodeling, and renovations."
        textOne="Talk about your company's guiding principles and approach to service. Think about what sets you apart from your competition and highlight them here. Whether it's a unique service, outstanding quality, value for money, or any other thing, having a differentiating factor will make you more attractive to all the other companies that say the same thing"
        textTwo="Talk about your company's guiding principles and approach to service. Think about what sets you apart from your competition and highlight them here. Whether it's a unique service, outstanding quality, value for money, or any other thing, having a differentiating factor will make you more attractive to all the other companies that say the same thing"
        />
      </div>
    </Layout>
  );
}
