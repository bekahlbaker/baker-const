import React from "react";
import styles from "./_ContentAreaTwo.module.scss";
import Container from "../Container/Container";

const HomeContentAreaTwo = ({ photo, title, subtitle, textOne, textTwo }) => {
  return (
    <section class={styles.contentAreaTwo}>
        <Container>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div className="text-wrapper">
                <p className="left">{textOne}</p>
                <p className="right">{textTwo}</p>
            </div>
      </Container>
    </section>
  );
};

export default HomeContentAreaTwo;
