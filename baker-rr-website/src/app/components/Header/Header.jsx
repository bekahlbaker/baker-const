import React from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import Logo from "../../../../public/images/BakerRRLogo.png"
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
        <Container>
          <Image src={Logo} alt="Baker Remodel & Restoration Logo" />
        </Container>
    </header>
  );
};

export default Header;
