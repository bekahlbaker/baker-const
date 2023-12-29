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
        backgroundImage: `linear-gradient(200deg,rgba(0, 0, 0, 0.10),rgba(0, 0, 0, .9)),url(${fields?.footerBackgroundImage?.fields?.file?.url})`,
      }}
    >
      <Container>
        <div className="content">
          <img src="https://place-hold.it/180x68/3B3B98/ffffff&text=BakerRR&bold&fontsize=22" />
          <div>
            <h2>Contact us</h2>
            <div className="footer-blocks">
              <div className="address">
                <div>Baker Remodel and Restoration</div>
                <div>1234 Main Street</div>
                <div>City, State 12345</div>
              </div>
              <div className="contact">
                <div>Phone: 123-456-7890</div>
                <div>Email: test@gmail.com</div>
                <div>Instagram: @bakerrandr</div>
              </div>
              <div className="text">
                Have a project in mind? We're here to bring your vision to life.
                Contact Baker Remodel and Restoration for tailored remodeling
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
