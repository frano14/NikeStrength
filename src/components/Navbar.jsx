import React, { useEffect, useState } from "react";
import nikeImg from "../assets/nike.png";
import whiteMenuImg from "../assets/whiteMenu.png";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleScroll = () => {
    if (window.scrollY > screenHeight && !isFixed) {
      setIsFixed(true);
    } else if (window.scrollY <= screenHeight) {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isFixed ? "fixed bg-black" : "absolute"
        } top-0 py-3 w-full z-[5]`}
      >
        <div
          className={`${
            hamburgerMenu ? "flex" : "hidden"
          } absolute w-full bg-red-200 z-10 top-[70px]`}
        >
          <ul className="flex flex-col items-center justify-center w-full gap-3 py-3">
            <li className="cursor-pointer">Deals</li>
            <li className="cursor-pointer">Dumbbells</li>
            <li className="cursor-pointer">Kettlebells</li>
            <li className="cursor-pointer">Barbells & Plates</li>
          </ul>
        </div>
        <div className="xl:max-w-[1200px] w-full m-auto xl:px-0 sm:px-16 px-6 flex justify-between items-center">
          <img src={nikeImg} alt="nike" className="w-[50px]" />
          <ul className="sm:flex hidden gap-8 text-white">
            <li className="cursor-pointer">Deals</li>
            <li className="cursor-pointer">Dumbbells</li>
            <li className="cursor-pointer">Kettlebells</li>
            <li className="cursor-pointer">Barbells & Plates</li>
          </ul>
          <button className="borderButton bg-white text-black sm:px-6 px-4 sm:py-3 py-[6px] rounded-3xl hover:bg-transparent hoverBorder hover:text-white translate-x-[-100px] opacity-0">
            Shop Now
          </button>
          <img
            src={whiteMenuImg}
            alt="menu"
            className="sm:hidden flex w-[32px] h-[32px]"
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
