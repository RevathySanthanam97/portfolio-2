import Insta from "../assets/insta.svg?react";
import Gmail from "../assets/mail.svg?react";
import LinkedIn from "../assets/linkedin.svg?react";
import "./Social.scss";

const Social = () => {
  return (
    <ul className="social-media">
      <li><a href="https://www.instagram.com/amitaredolent7/"><Insta /></a></li>
      <li><a href="mailto:revathysanthanam1997@gmail.com"><Gmail /></a></li>
      <li><a href="https://www.linkedin.com/in/revathy-santhanam-70870a165/"><LinkedIn /></a></li>
    </ul>
  )
}

export default Social