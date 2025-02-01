import { IconBrain } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface CardProps {
  setOpen: () => void;
  title?: string;
  description?: string[];
  children?: React.ReactNode;
}

const Modal: React.FC<CardProps> = ({ setOpen, title, description, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Control visibility for unmounting

  useEffect(() => {
    setIsAnimating(true); // Trigger open animation when modal mounts
  }, []);

  const handleClose = () => {
    setIsAnimating(false); // Trigger close animation
    setTimeout(() => {
      setIsVisible(false); // Remove modal from DOM after animation ends
      setOpen();
    }, 300); // Match the transition duration
  };

  if (!isVisible) return null; // Prevent rendering after animation completes

  return (
    <div
      className={`fixed z-40 inset-0 flex items-center justify-center bg-black bg-opacity-25 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative w-full max-w-md max-h-[90vh] bg-white rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 ${
          isAnimating ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h1 className="flex items-center text-lg font-bold animate-slideInRight">
            <IconBrain stroke={2} className="mr-2" />
            {title}
          </h1>
        </header>

        {/* Body */}
        <section className="relative flex-1 px-6 py-4 overflow-y-auto">
          <div className="prose text-wrap text-justify">
            {!children && (<ul className="list-disc list-inside space-y-1">
              {(description || []).map((activity: string, i: number) => (
                <li
                  key={i}
                  className="text-gray-600 animate-fadeIn"
                >
                  {activity}
                </li>
              ))}
            </ul>)}
            {children && (children)}
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-end px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="px-4 py-2 font-semibold text-white bg-pink-700 rounded-lg hover:bg-pink-900"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
