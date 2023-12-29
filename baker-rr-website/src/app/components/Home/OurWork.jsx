import React, { useState, useEffect } from "react";
import content from "../../../utils/api/content";
import styles from "./_OurWork.module.scss";
import Container from "../Container/Container";
import OurWorkCard from "../OurWorkCard/OurWorkCard";

const OurWork = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    content.getOurWorkEntries().then((res) => {
      setItems(res.items);
    });
  }, [items]);

  return (
    <section className={styles.ourWork}>
      <Container>
        <h2>Our work</h2>
        <div className="card-row">
          {Object.keys(items).map((key) => {
            console.log(items[key].fields);

            return (
              <OurWorkCard
                title={items[key].fields.title}
                photo={items[key].fields.image.fields.file.url}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default OurWork;
