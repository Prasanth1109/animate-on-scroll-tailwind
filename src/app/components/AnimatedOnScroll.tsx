"use client"

import { useEffect, useState } from "react";

type AnimatedOnScrollProps = {
  children: React.ReactNode;
  animation: string;
  className?: string; // To add custom styling
};

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({ children, animation, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(animation);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Reset animation when out of view
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id={animation}
      className={`${isVisible ? animation : ""} transition-opacity duration-500 ease-in-out ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
