// components/ScrollAnimation.tsx
import { useRef, useState, useEffect } from "react";
import "./scrollAnimation.scss";

type Props = {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "zoom" | "slide-right";
  duration?: number; // in ms
  delay?: number;    // in ms
  once?: boolean;
};

const ScrollAnimation = ({
  children,
  animation = "fade",
  duration = 700,
  delay = 0,
  once = true,
}: Props) => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [once]);

  return (
    <div
      ref={domRef}
      className={`scroll-anim ${animation} ${isVisible ? "visible" : ""}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
