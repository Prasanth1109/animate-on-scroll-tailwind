"use client"

import { IconUser, IconBlocks, IconTimelineEvent, IconDeviceMobileMessage, IconFileCv, IconChartGridDots, IconHome } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface BubbleProps {
  size: number;
  left: string;
  delay: number;
};

const navData = [
  {
    title: "Home",
    icon: <IconHome stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/",
  },
  {
    title: "Profile",
    icon: <IconUser stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/profile",
  },
  {
    title: "Projects",
    icon: <IconBlocks stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/projects",
  },
  {
    title: "Time Line",
    icon: <IconTimelineEvent stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/timeline",
  },
  {
    title: "Contact",
    icon: <IconDeviceMobileMessage stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/contact",
  },
  {
    title: "Resume",
    icon: <IconFileCv stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/resume",
  },
  {
    title: "Logics",
    icon: <IconChartGridDots stroke={2} />,
    nav: "https://prasanth-plan-and-view.vercel.app/logics",
  },
];

const AnimatedSidebar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, () => ({
      size: Math.random() * 40 + 10,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
    }));
    setBubbles(generatedBubbles);
  }, []);

  const Bubble: React.FC<BubbleProps> = ({ size, left, delay }) => {
    return (
      <div
        className={`absolute left-0 bottom-0 bg-blue-300 rounded-full animate-bubble`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left,
          animationDelay: `${delay}s`,
        }}
      ></div>
    );
  };

  return (
    <div className="absolute z-50">
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-5 left-5 z-50 w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Circular Sidebar */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-opacity-30 transition-all duration-500 ${isOpen ? "bg-black" : "bg-transparent pointer-events-none"
          }`}
      >
        <div
          className={`absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full transform transition-transform duration-500 ${isOpen ? "translate-x-10 translate-y-10 scale-100" : "-translate-x-full -translate-y-full scale-0"
            }`}
        >

          {/* <div className="sm:hidden absolute right-4"> */}
          <div className="absolute w-full">
            {navData.map((item) => (
              <button
                type="button"
                onClick={() => window.open(item.nav, "_blank")}
                key={item.title}
                className="
                  bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 shadow-lg shadow-gray-500/50 
                  text-white 
                  cursor-pointer font-semibold text-center 
                  shadow-xs transition-all 
                  duration-500 
                  hover:bg-gradient-to-l  
                  px-4 py-4 rounded-full 
                  flex items-center space-x-2 my-4 relative z-20"
              >
                {item.icon}
                <span>{item.title}</span>
              </button>
            ))}
            {bubbles.map((bubble, index) => (
              <Bubble
                key={index}
                size={bubble.size}
                left={bubble.left}
                delay={bubble.delay}
              />
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center h-full space-y-4 text-white">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AnimatedSidebar;
