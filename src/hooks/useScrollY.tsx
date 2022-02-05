import { useEffect, useState } from "react";

export const useScrollY = () => {
    const [scrollY, setScrollY] = useState(window.scrollY); // default width, detect on server.
    const handleScroll = () => setScrollY(window.scrollY);
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    return scrollY;
};