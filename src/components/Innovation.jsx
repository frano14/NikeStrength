import React, { useState } from "react";
import photo0 from "../assets/innovation1st.jpg";
import photo1 from "../assets/innovation2st.jpeg";
import photo2 from "../assets/innovation9st.jpeg";
import photo3 from "../assets/innovation4st.jpeg";
import photo4 from "../assets/innovation5st.jpeg";
import photo5 from "../assets/innovation6st.jpeg";
import photo6 from "../assets/innovation7st.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Innovation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        id="innovation"
        className="relative innovationBg flex justify-start items-center flex-col sm:py-32 py-24 w-full xl:px-0 sm:px-16 px-6"
      >
        <div className="overlay w-full h-full absolute top-0 left-0"></div>
        <div className="xl:max-w-[1200px] w-full xl:px-0 m-auto z-[2]">
          <h1 className=" xs:mb-8 mb-4 sm:leading-[82px] ss:leading-[62px] xs:leading-[48px] leading-[40px] customFont md:text-[96px] sm:text-[84px] ss:text-[66px] xs:text-[54px] text-[44px] font-SEMIbold text-white">
            LIFTING UP <br /> INNOVATION
          </h1>
          <button
            id="shopNowBtn"
            className="borderButton bg-white text-black sm:px-6 px-4 sm:py-3 py-[6px] rounded-3xl hover:bg-transparent hoverBorder hover:text-white"
          >
            Shop Now
          </button>
        </div>
      </section>
      <div className="grayBg sm:py-[68px] ss:py-[52px] xs:py-[56px] py-[60px]  relative flex justify-center items-center">
        <Slider
          {...settings}
          className="sm:w-[800px] ss:w-[550px] xs:w-[420px] w-[220px] absolute top-0 m-auto translate-y-[-50%]"
        >
          <div className="p-2 bg-white">
            <img src={photo1} alt="Cardio and strength w-[50px]" />
          </div>
          <div className="p-2 bg-white">
            <img src={photo2} alt="Cardio and strength w-[50px]" />
          </div>
          <div className="p-2 bg-white">
            <img src={photo3} alt="Cardio and strength w-[50px]" />
          </div>
          <div className="p-2 bg-white">
            <img src={photo4} alt="Cardio and strength w-[50px]" />
          </div>
          <div className="p-2 bg-white">
            <img src={photo5} alt="Cardio and strength w-[50px]" />
          </div>
          <div className="p-2 bg-white">
            <img src={photo6} alt="Cardio and strength w-[50px]" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Innovation;
