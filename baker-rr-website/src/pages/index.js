import Hero from "../components/Hero/hero";
import styles from "../app/index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Baker Remodel and Restoration | Transforming Spaces in East Texas with
          Expert Craftsmanship
        </title>
      </Head>
      <Hero />
      <main className={styles.main}>
        <h1>Test</h1>
      </main>
    </>
  );
}
