import Image from "next/image";
import styles from "./_hero.module.scss";
import globals from "../../../app/index.module.css";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.hero_content}>
          <h1 className={globals.title}>
            Do you need a new home built?
            <br />
            Call us today.
          </h1>
          <h2 className={globals.subtitle}>
            Your dream home can be a reality.
            <br />
            Let us help you make it happen.
          </h2>
          <button className={styles.hero_button}>
            <p>GET IN TOUCH</p>
          </button>
        </div>
      </Container>
    </div>
  );
}
