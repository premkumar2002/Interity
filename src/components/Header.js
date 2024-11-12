import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to toggle `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isSigned, setIsSigned] = useState(false);

  const handleSignIn = () => {
    setIsSigned(!isSigned);
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-opacity-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <div
        className={`flex justify-between items-center cursor-pointer pt-5 px-6 ${
          isScrolled ? "justify-center" : ""
        }`}
      >
        {/* Hide h1 and button when scrolled */}
        {!isScrolled && (
          <h1 className="text-2xl font-extrabold text-zinc-700">Interity</h1>
        )}

        <ul
          className={`text-zinc-500 flex space-x-7 transition-all duration-300 ${
            isScrolled
              ? "rounded-full bg-zinc-200 p-2 w-[300px] mx-auto justify-center"
              : ""
          }`}
        >
          <li className="hover:text-zinc-800">Home</li>
          <li className="hover:text-zinc-800">Products</li>
          <li className="hover:text-zinc-800">About</li>
          <li className="hover:text-zinc-800">Gallery</li>
        </ul>

        {/* Hide button when scrolled */}
        {!isScrolled && (
          <button
            className="text-zinc-600 border rounded-full px-3 py-1 hover:text-zinc-900 border-zinc-600"
            onClick={handleSignIn}
          >
            {isSigned ? "Sign In" : "Sign Out"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
