import styles from "./_hero.module.scss";
import Container from "../Container/Container";
import Link from "next/link";

export default function Hero({ photo, title, subtitle }) {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(200deg,rgba(245, 246, 252, 0.15) 25%,rgba(0, 0, 0, 0.9) 65%),url(${photo})`,
      }}
    >
      <Container>
        <div className="hero_content">
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <Link className="hero_button" href="#contact">
            Contact us now
          </Link>
        </div>
      </Container>
    </section>
  );
}
