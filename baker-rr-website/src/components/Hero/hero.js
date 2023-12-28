import Image from "next/image";
import hero from "../../../public/images/hero.jpeg";
import styles from "./_hero.module.scss";
import globals from "../../app/index.module.css";
import Text from "../Text/text";

export default function Hero() {
  return (
    <>
        <div className={styles.hero}>
        {/* <Image src={hero} alt="hero" layout="fill" objectFit="cover" /> */}
        </div>
        
        <div className={styles.hero_content}>
            <h1 className={globals.title}>Do you need a new home built?<br/>Call us today.</h1>
            <h2 className={globals.subtitle}>Your dream home can be a reality.<br/>Let us help you make it happen.</h2>
            <button className={styles.hero_button}>
                <p>GET IN TOUCH</p>
            </button>
        </div>
    </>
  );
}