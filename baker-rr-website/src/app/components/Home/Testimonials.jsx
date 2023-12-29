import React, { useEffect, useState } from "react";
import styles from "./_Testimonials.module.scss";
import Container from "../Container/Container";
import TestimonialCarousel from "../Carousel/TestimonialCarousel";
import content from "@/utils/api/content";

const Testimonials = () => {
    const [items, setItems] = useState({});

    useEffect(() => {
      content.getTestimonialsEntries().then((res) => {
        setItems(res.items);
      });
    }, [items]);

if (items.length === 0) return null;

  return (
    <section class={styles.testimonials}>
        <Container>
            <h2>Testimonials</h2>
            <TestimonialCarousel items={items} />
        </Container>
    </section>
  );
};

export default Testimonials;
