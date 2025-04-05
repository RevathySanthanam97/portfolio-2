import {
  Link,
  useLocation,
} from "react-router-dom";
import "./Navbar.scss";
import BG from "../assets/yellow-bg.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="header-right" data-home={isHome ? true : false}>
      {isHome && (
        <div className="bg">
          <img src={BG} />
        </div>
      )}
      <nav>
        <li><Link data-hover="Home" to="/">Home</Link></li>
        <li><Link data-hover="About" to="/about">About</Link></li>
        <li><Link data-hover="Projects" to="/projects">Projects</Link></li>
        <li><Link data-hover="Contacts" to="/contacts">Contacts</Link></li>
      </nav>
    </div>
  )
}

export default Navbar;
