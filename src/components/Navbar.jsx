import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
          } absolute w-full bg-white z-10 top-[70px] shadow-2xl`}
        >
          <ul className="flex flex-col items-center justify-center w-full gap-5 py-3">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="deals"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Deals
              </Link>
            </li>
            <li>
              <Link
                to="ourbestproducts"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Our Best Products
              </Link>
            </li>
            <li>
              <Link
                to="athletes"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Athletes
              </Link>
            </li>
            <li>
              <Link
                to="dumblewithwater"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Companions
              </Link>
            </li>
            <li>
              <Link
                to="instagram"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
                onClick={() => setHamburgerMenu(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="xl:max-w-[1200px] w-full m-auto xl:px-0 sm:px-16 px-6 flex justify-between items-center">
          <img src={nikeImg} alt="nike" className="w-[50px]" />
          <ul className="md:flex hidden gap-8 text-white">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="deals"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Deals
              </Link>
            </li>
            <li>
              <Link
                to="ourbestproducts"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Our Best Products
              </Link>
            </li>
            <li>
              <Link
                to="athletes"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Athletes
              </Link>
            </li>
            <li>
              <Link
                to="dumblewithwater"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Companions
              </Link>
            </li>
            <li>
              <Link
                to="instagram"
                smooth={true}
                duration={500}
                className=" cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="borderButton md:flex hidden bg-white text-black sm:px-6 px-4 sm:py-3 py-[6px] rounded-3xl hover:bg-transparent hoverBorder hover:text-white ">
            Shop Now
          </button>
          <img
            src={whiteMenuImg}
            alt="menu"
            className="md:hidden flex w-[32px] h-[32px]"
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
