import React from "react";
import styles from "./_ContentAreaTwo.module.scss";
import Container from "../Container/Container";

const HomeContentAreaTwo = ({ photo, title, subtitle, textOne, textTwo }) => {
  return (
    <>
        <section class={styles.contentAreaTwo}>
        <Container>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <div className="text-wrapper">
                <div>
                  <p className="left title">Our Core Values</p>
                  <p className="left">{textOne}</p>
                </div>
        
                <div>
                  <p className="right title">Our Service Approach</p>
                  <p className="right">{textTwo}</p>
                </div>
                
            </div>
      </Container>
    </section>
    <div class={styles.banner} />
    </>
  );
};

export default HomeContentAreaTwo;
