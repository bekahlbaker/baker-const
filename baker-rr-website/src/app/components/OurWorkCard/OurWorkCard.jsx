import React from "react";
import styles from "./_OurWorkCard.module.scss";

const OurWorkCard = ({ title, photo }) => {
  return (
    <div className={styles.ourWorkCard}>
      <img src={photo} alt={title} />
      <h4>{title}</h4>
      <a href="#">See more</a>
    </div>
  );
};

export default OurWorkCard;
