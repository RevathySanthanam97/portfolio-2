import "./About.scss"
import Resume from "../assets/Revathy_CV.pdf"

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-left">
        <h1>About</h1>
        <p className="nunito">Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.</p>
        <a href={Resume} target="_blank" className="secondary">Resume</a>
      </div>
      <div className="about-right">
        
      </div>
    </div>
  )
}

export default About