import "./Footer.scss";
import Title from "./Title";
import Social from "./Social";
import ScrollAnimation from "./ScrollAnimation";
import FooterSVG from "../assets/footer.svg?react";

const Footer = () => {
  return (
    <ScrollAnimation animation="slide-up" duration={400} delay={100}>
      <footer>
        <FooterSVG />
        <div className="container">
          <Title>Contact</Title>
          <Social />
          <p className="nunito">
            Revathy Santhanam, Since 2019
          </p>
        </div>
      </footer>
    </ScrollAnimation>
  )
}

export default Footer