import React from "react";
import styles from "./_Testimonials.module.scss";
import Container from "../Container/Container";
import TestimonialCarousel from "../Carousel/TestimonialCarousel";

const Testimonials = ({ items }) => {
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
