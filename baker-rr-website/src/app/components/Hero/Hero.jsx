import styles from "./_hero.module.scss";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <section class={styles.hero}>
      <Container>
        <div className="hero_content">
          <h1>
            Do you need a new home built?
            <br />
            Call us today.
            <br />
          </h1>
          <p className="subtitle">
            Your dream home can be a reality. Let us help you make it happen.
          </p>
          <button className="hero_button">
            <p>GET IN TOUCH</p>
          </button>
        </div>
      </Container>
    </section>
  );
}
