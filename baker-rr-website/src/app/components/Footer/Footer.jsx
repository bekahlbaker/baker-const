import { useEffect, useState } from "react";
import styles from "./_Footer.module.scss";
import Container from "../Container/Container";
import content from "../../../utils/api/content";

const Footer = () => {
  const [fields, setFields] = useState({});

  useEffect(() => {
    content.getHomePageContent().then((res) => {
      setFields(res.fields);
    });
  }, [fields]);

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: `linear-gradient(200deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, .9)),url(${fields?.footerBackgroundImage?.fields?.file?.url})`,
      }}
    >
      <Container>
        <div className="content">
          <img src="https://place-hold.it/180x68/3B3B98/ffffff&text=BakerRR&bold&fontsize=22" />
          <div>
            <h2 id="contact">Contact us</h2>
            <div className="footer-blocks">
              <div className="address">
                <div>Baker Remodel & Restoration LLC</div>
                <div>680 W Dallas St Ste 3</div>
                <div>Canton, TX 75103</div>
              </div>
              <div className="contact">
                <div>
                  Phone: <a href="tel:9037142285">903-714-2285</a>
                </div>
                <div>
                  Email: <a href="mailto:test@gmail.com">test@gmail.com</a>
                </div>
              </div>
              <div className="text">
                Have a project in mind? We're here to bring your vision to life.
                Contact Baker Remodel & Restoration LLC for tailored remodeling
                solutions and expert guidance.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
