import Insta from "../assets/insta.svg";
import Gmail from "../assets/mail.svg";
import LinkedIn from "../assets/linkedin.svg";
import "./Footer.scss";
import Title from "./Title";

const Footer = () => {
  return (
    <footer>
      <div className='container-content'>
        <Title>Contact Me</Title>
        <ul className="social-media">
          <li><a href="https://www.instagram.com/amitaredolent7/"><img src={Insta} /></a></li>
          <li><a href="mailto:revathysanthanam1997@gmail.com"><img src={Gmail} /></a></li>
          <li><a href="https://www.linkedin.com/in/revathy-santhanam-70870a165/"><img src={LinkedIn} /></a></li>
        </ul>
        <p className="nunito">
          Revathy Santhanam, Since 2019
        </p>
      </div>
    </footer>
  )
}

export default Footer