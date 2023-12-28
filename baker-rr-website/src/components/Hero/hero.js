import Image from "next/image";
import hero from "../../../public/images/hero.jpeg";
import styles from "./_hero.module.scss";

export default function Hero() {
  return (
    <Image
      className={styles.hero}
      src={hero}
      alt="hero"
      width={"100vw"}
      height={"100vh"}
    />
  );
}
