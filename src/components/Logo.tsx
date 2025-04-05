import { Link } from "react-router-dom";
import Logo1 from "../assets/logo2.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={Logo1} />
      </Link>
    </div>
  )
}

export default Logo