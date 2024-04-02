import React, { useState } from "react";
import firstPhoto from "../assets/deals1stPhoto.webp";
import secondPhoto from "../assets/deals2stPhoto.webp";
import thirdPhoto from "../assets/deals3stPhoto.webp";
import fourthPhoto from "../assets/deals4stPhoto.webp";

const Deals = () => {
  return (
    <section id="deals" className="grayBg sm:py-16 py-6">
      <div className="xl:max-w-[1200px] w-full m-auto grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 sm:gap-4 gap-8">
        <div className="w-full dealDiv1 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <img src={firstPhoto} alt="gym photo" />
          <div className="shopDiv1 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv2 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <img src={secondPhoto} alt="gym photo" />
          <div className="shopDiv2 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv3 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <img src={thirdPhoto} alt="gym photo" />
          <div className="shopDiv3 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv4 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <img src={fourthPhoto} alt="gym photo" />
          <div className="shopDiv4 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
      </div>
    </section>
  );
};
export default Deals;
