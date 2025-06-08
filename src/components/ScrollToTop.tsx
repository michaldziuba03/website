import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(() => window.scrollY > 300);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg bg-gray-800 text-white transition-transform duration-200  ${
        visible ? "scale-100" : "scale-0"
      } hover:bg-gray-700`}
      aria-label="Scroll to the top"
    >
      <LuArrowUp className="w-5 h-5" />
    </button>
  );
}
