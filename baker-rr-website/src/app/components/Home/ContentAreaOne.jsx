import React from "react";
import styles from "./_ContentAreaOne.module.scss";
import Container from "../Container/Container";

const HomeContentAreaOne = ({ photo, title, subtitle, text }) => {
  return (
    <section class={styles.contentAreaOne}>
      <div className="left">
        <img src={photo} alt="" />
      </div>
      <div className="right">
        <h2>{title}</h2>
        <h4 className="subhead">{subtitle}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HomeContentAreaOne;
