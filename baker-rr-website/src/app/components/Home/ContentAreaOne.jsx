import React from "react";
import styles from "./_ContentAreaOne.module.scss";
import Container from "../Container/Container";

const HomeContentAreaOne = ({ photo }) => {
  return (
    <section class={styles.contentAreaOne}>
      <div className="left">
        <img src={photo} alt="" />
      </div>
      <div className="right">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h4 className="subhead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          explicabo!
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quia autem iusto aperiam et perferendis sapiente eveniet minima ex
          placeat ullam neque architecto fugit excepturi eligendi, saepe rerum
          cumque maxime.
        </p>
      </div>
    </section>
  );
};

export default HomeContentAreaOne;
