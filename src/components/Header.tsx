import Navbar from './Navbar'
import Logo from './Logo'
import { useLocation } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
	const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
		<header className='container'>
			<Logo />
			<Navbar isHome={isHome} />
		</header>
  )
}

export default Header