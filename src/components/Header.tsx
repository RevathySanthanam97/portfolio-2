import Navbar from './Navbar'
import Logo from './Logo'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
	const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const shape = document.getElementById("animatedPath");
    if (!shape) return;

    let t = 0;
    let raf: number;

    const animate = () => {
      t += 0.0005;

      const angle = t;
      const scale = 1 + 0.1 * Math.sin(t * 1.5); // Lower scale to prevent overflow

      const cos = Math.cos(angle) * scale;
      const sin = Math.sin(angle) * scale;

      // Slightly reduced matrix to avoid growth
      const a0 = 0.9, b0 = 0.5;
      const c0 = -0.4, d0 = 0.9;

      const a = (a0 * cos - b0 * sin).toFixed(4);
      const b = (a0 * sin + b0 * cos + Math.sin(t * 2) * 0.1).toFixed(4);
      const c = (c0 * cos - d0 * sin + Math.cos(t * 1.5) * 0.1).toFixed(4);
      const d = (c0 * sin + d0 * cos).toFixed(4);

      const tx = 0, ty = 0;

      shape.setAttribute("transform", `matrix(${a},${b},${c},${d},${tx},${ty})`);
      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, [isHome]);

  return (
		<header className='container'>
			{isHome && (
        <div className="bg">
          <svg
            id="animatedSvg"
            width="800"
            height="480"
            viewBox="0 0 800 480"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            style={{ shapeRendering: "auto", display: "block", background: "#fff" }}
          >
            <g opacity="0.9" transform="matrix(100,0,0,100,670.18,65.53)">
              <path
                id="animatedPath"
                fill="#fdc435"
                strokeWidth="0"
                d="M3.024 0 C3.024 0.64 3.24 1.13 2.92 1.69 S2.06 2.3 1.51 2.62 S0.64 3.376 0 3.376 S-0.95 2.93 -1.51 2.62 S-2.6 2.24 -2.92 1.69 S-3.02 0.64 -3.02 0 S-3.24 -1.13 -2.92 -1.68 S-2.06 -2.3 -1.51 -2.61 S-0.64 -3.37 0 -3.37 S0.95 -2.93 1.51 -2.61 S2.6 -2.24 2.92 -1.68 S3.02 -0.64 3.02 0"
                transform="matrix(0.6146,0.7889,-0.7889,0.6146,0,0)"
              />
            </g>
          </svg>
        </div>
      )}
			<Logo />
			<Navbar isHome={isHome} />
		</header>
  )
}

export default Header