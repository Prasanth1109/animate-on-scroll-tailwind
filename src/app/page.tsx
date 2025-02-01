"use client"
import { useState } from "react";
import AnimatedOnScroll from "./components/AnimatedOnScroll";
import { animationStyle, keyframes } from "./components/utils/data";
import AnimatedSidebar from "./components/ui/AnimatedSidebar";
import Modal from "./components/ui/modal";
import { CodeBlock } from "./components/ui/code-block";

const animations = [
  "fadeIn",
  "fadeOut",
  "zoomIn",
  "zoomOut",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "slideInDown",
  "bounceIn",
  "rotateIn",
  "flipInX",
  "pulse",
  "bounceOut",
  "shake",
  "swing",
  "flipInY",
  "zoomInDown",
  "zoomOutDown",
  "fadeInUp",
  "fadeInDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp",
  "slideOutDown",
  "rollIn",
  "rollOut",
  "fadeInLeft",
  "fadeInRight",
  "lightSpeedIn",
  "lightSpeedOut",
  "tada",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "flipOutX",
  "flipOutY",
  "zoomInLeft",
  "zoomOutLeft",
  "zoomInRight",
  "zoomOutRight",
  "fadeInZoom",
  "fadeOutZoom",
  "slideUp",
  "slideDown",
  "swingRight",
  "swingLeft",
  "fadeInRightBig",
  "fadeOutLeftBig",
  "flipOutUp",
  "flipOutDown",
];

const Home = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    description1: '',
    description2: ''
  });

  const handleCloseModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      isOpen: false
    }));
  };

  const handleCardClick = (cardTitle: string) => {
    setModalState({
      isOpen: true,
      title: cardTitle,
      description1: JSON.stringify(animationStyle[cardTitle]),
      description2: JSON.stringify(keyframes[cardTitle])
    });
  };
  return (
    <main className="flex items-center justify-center overflow-x-hidden">
      <AnimatedSidebar />
      <div className="space-y-24 p-14">
        {animations.map((animation, index) => (
          <AnimatedOnScroll key={index} animation={"animate-"+animation}>
            <div
              onClick={() => handleCardClick(animation)}
              className={`p-8 rounded-lg shadow-lg cursor-pointer ${index % 5 === 0
                  ? "bg-teal-500 text-white"
                  : index % 5 === 1
                    ? "bg-blue-500 text-white"
                    : index % 5 === 2
                      ? "bg-green-500 text-white"
                      : index % 5 === 3
                        ? "bg-purple-500 text-white"
                        : "bg-red-500 text-white"
                }`}
            >
              <div className="text-center text-lg font-semibold">{animation}</div>
            </div>
          </AnimatedOnScroll>
        ))}
      </div>
      {modalState.isOpen && (
        <Modal
          title={modalState.title}
          // description={modalState.description}
          setOpen={handleCloseModal}
        >
          <div className="max-w-3xl mx-auto w-full">
            <CodeBlock
              language="ts"
              filename={"tailwind.config.ts"}
              highlightLines={[9, 13, 14, 18]}
              code={
                `
                import type { Config } from "tailwindcss";

                export default {
                  content: [
                    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
                  ],
                  theme: {
                    extend: {
                      animation: {
                        ${modalState.title+": "+modalState.description1}
                      },
                      keyframes: {
                        ${modalState.title+": "+modalState.description2}
                      }
                    },
                  },
                  plugins: [],
                } satisfies Config;

                `
              }
            />
          </div>
        </Modal>
      )}
    </main>
  );
};

export default Home;
