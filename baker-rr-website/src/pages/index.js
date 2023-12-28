import Hero from "../components/Hero/Hero.jsx";
import styles from "../app/index.module.css";
import Head from "next/head";
import Header from "../app/components/Header/Header";
import { useEffect } from "react";
import content from "../utils/api/content";

export default function Home() {
  useEffect(() => {
    content.getHomePageContent().then((res) => console.log("HOME", res));
  }, []);

  return (
    <>
      <Head>
        <title>
          Baker Remodel and Restoration | Transforming Spaces in East Texas with
          Expert Craftsmanship
        </title>
      </Head>
      <Header />
      <Hero />
      <main className={styles.main}>
        <h1>Test</h1>
      </main>
    </>
  );
}
