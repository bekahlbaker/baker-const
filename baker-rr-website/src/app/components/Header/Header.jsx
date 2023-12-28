import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <img src="https://place-hold.it/180x68/3B3B98/ffffff&text=BakerRR&bold&fontsize=22" />
      </Container>
    </header>
  );
};

export default Header;
