import {
  Link,
} from "react-router-dom";
import "./Navbar.scss";
import Burger from "../assets/rocket.svg";
import CloseIcon from "../assets/satellite-solid.svg?react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Social from "./Social";

const Navbar = ({ isHome = false } : { isHome: boolean }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div data-menu={open} className="header-right" data-home={isHome}>
      <button onClick={() => setOpen(!open)} className="mob-nav">
        <img src={Burger} />
      </button>
      <div className="nav-items" onClick={() => setOpen(false)}>
        <nav>
          <li className="flex-justify">
            <Logo />
            <span className="close-icon">
              <CloseIcon />
            </span>
          </li>
          <li><Link onClick={() => setOpen(false)} data-hover="Home" to="/">Home</Link></li>
          <li><Link onClick={() => setOpen(false)} data-hover="About" to="/about">About</Link></li>
          <li><Link onClick={() => setOpen(false)} data-hover="Projects" to="/projects">Projects</Link></li>
          <li><Link onClick={() => setOpen(false)} data-hover="Contacts" to="/contacts">Contacts</Link></li>
          <li>
            <p className="nunito">Find me in</p>
            <Social />
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
