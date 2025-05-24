import "./About.scss"
import Resume from "../assets/Revathy_CV.pdf"
import ScrollAnimation from "../components/ScrollAnimation"
import AboutImg from "../assets/about.webp";

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-left">
        <ScrollAnimation animation="slide-right" duration={500} delay={100}>
          <h1>About</h1>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-right" duration={500} delay={300}>
          <p className="nunito">Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</p>
        </ScrollAnimation>
        <ScrollAnimation animation="slide-right" duration={500} delay={600}>
          <a href={Resume} target="_blank" className="secondary">Resume</a>
        </ScrollAnimation>
        </div>
      <div className="about-right">
        <img src={AboutImg} />
      </div>
    </div>
  )
}

export default About