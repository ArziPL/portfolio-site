import NavButtons from "../molecules/NavButtons";
import Title from "../atoms/Title";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTop, setNavbarTop] = useState(true);

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

  useEffect(() => {
    if (scrollPosition > 200) {
      setNavbarTop(false);
    } else {
      setNavbarTop(true);
    }
  }, [scrollPosition]);

  return (
    <div style={{ height: navbarTop ? "100px" : "auto", opacity: navbarTop ? "1" : "0.7" }} className="navbar">
      <Title>ArZi</Title>
      <NavButtons className="navbar__buttons" />
    </div>
  );
}
