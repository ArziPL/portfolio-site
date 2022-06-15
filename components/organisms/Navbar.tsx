import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTop, setNavbarTop] = useState(true);

  // Get scroll position
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setScrollPosition(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Get scroll position

  // Decide navbar styles based on scroll position
  useEffect(() => {
    if (scrollPosition > 200) {
      setNavbarTop(false);
    } else {
      setNavbarTop(true);
    }
  }, [scrollPosition]);

  return (
    <div style={{ height: navbarTop ? "100px" : "auto", opacity: navbarTop ? "1" : "0.7" }} className="navbar">
      <Title className="navbar__title">ArZi</Title>
      <div className="navbar__buttons">
          <a href="#about"><Button>ABOUT ME</Button></a>
          <a href="#projects"><Button>PROJECTS</Button></a>
          <a href="#contact"><Button>CONTACT</Button></a>
      </div>
    </div>
  );
}
