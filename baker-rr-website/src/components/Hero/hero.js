import Image from "next/image";
import hero from "../../../public/images/hero.jpeg";

export default function Hero() {
  return (
      <Image src={hero} alt="hero" width={"100vw"} height={"100vh"} />
  );
}
