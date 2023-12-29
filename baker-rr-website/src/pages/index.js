import Hero from "../app/components/Hero/Hero";
import Head from "next/head";
import { Saira } from "next/font/google";
import Header from "../app/components/Header/Header";
import { useEffect, useState } from "react";
import content from "../utils/api/content";
import HomeContentAreaOne from "../app/components/Home/ContentAreaOne";
import dynamic from "next/dynamic";
import HomeContentAreaTwo from "@/app/components/Home/ContentAreaTwo";
import OurWork from "@/app/components/Home/OurWork";
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

    console.log(fields);
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
        <Hero
          photo={fields?.mainAreaPhoto?.fields?.file?.url}
          title={fields?.mainAreaHeadline}
          subtitle={fields?.mainAreaSubHeadline}
        />

        <HomeContentAreaOne
          photo={fields?.contentArea1Image?.fields?.file?.url}
          title={fields?.contentArea1Headline}
          subtitle={fields?.contentArea1SubHeadline}
          text={fields?.contentArea1Paragraph}
        />
        <HomeContentAreaTwo
          title={fields?.contentArea2Headline}
          subtitle={fields?.contentArea2SubHeadline}
          textOne={fields?.contentArea2ParagraphLeft}
          textTwo={fields?.contentArea2ParagraphRight}
        />
        <OurWork />
      </div>
    </Layout>
  );
}
