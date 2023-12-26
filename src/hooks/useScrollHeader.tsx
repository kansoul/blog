import { useEffect, useState } from "react";

export default function useScrollHeader() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolling(true);
      }
      if (scrollTop === 0) setScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrolling;
}
