import React from "react";
import scrollImg from "../assets/scrollImg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".heroTitle", { opacity: 1, delay: 2, y: 0 });
    gsap.to(".heroSubtitle", { opacity: 1, delay: 1, y: 0 });
    gsap.to("#shopNowBtn", { opacity: 1, delay: 0.5, x: 0 });
    gsap.to("#ExploreMoreBtn", { opacity: 1, delay: 0.5, x: 0 });
    gsap.to("#scrollBlock", { opacity: 1, delay: 4, y: 0 });
  });

  return (
    <section
      id="hero"
      className="flex justify-center items-center bg w-[100vw] h-[100vh] relative"
    >
      <div className="overlay absolute w-[100vw] h-[100vh] top-0 left-0"></div>
      <div className="z-[3] text-white flex flex-col justify-center items-center">
        <h1 className="customFont opacity-0 heroTitle md:text-[96px] sm:text-[84px] ss:text-[66px] xs:text-[54px] text-[44px] font-bold translate-y-[50px]">
          BUILD YOUR GYM
        </h1>
        <p className="heroSubtitle opacity-0 sm:mb-8 mb-6 mb md:text-[22px] sm:text-[20px] ss:text-[16px] xs:text-[14px] text-[12px] translate-y-[50px]">
          NFL Athlete Brandin Cooks Built the Home Gym of His Dreams
        </p>
        <div className="flex gap-8">
          <button
            id="shopNowBtn"
            className="borderButton bg-white text-black sm:px-6 px-4 sm:py-3 py-[6px] rounded-3xl hover:bg-transparent hoverBorder hover:text-white translate-x-[-100px] opacity-0"
          >
            Shop Now
          </button>
          <div
            id="ExploreMoreBtn"
            className="borderButton rounded-3xl sm:px-6 px-4 sm:py-3 py-[6px] cursor-pointer hover:bg-white hover:text-black translate-x-[100px] opacity-0"
          >
            <p className="z-10">Explore More</p>
          </div>
        </div>
      </div>
      <div
        id="scrollBlock"
        className="absolute opacity-0 bottom-[50px] text-white flex justify-center items-center flex-col translate-y-[-100px]"
      >
        <img src={scrollImg} alt="scroll" className="w-10 h-10" />
        <p>Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
