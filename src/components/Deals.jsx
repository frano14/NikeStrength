import React, { useState } from "react";
import firstPhoto from "../assets/deals1stPhoto.jpg";
import secondPhoto from "../assets/deals2stPhoto.jpg";
import thirdPhoto from "../assets/deals3stPhoto.jpg";
import fourthPhoto from "../assets/deals4stPhoto.jpg";

const Deals = () => {
  return (
    <section id="deals" className="grayBg sm:py-16 py-6">
      <div className="xl:max-w-[1200px] w-full m-auto grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 sm:gap-4 gap-8">
        <div className="w-full dealDiv1 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <p className="absolute customFont font-black text-white text-5xl text-center">
              BEST SELLER
            </p>
            <img src={firstPhoto} alt="gym photo" />
          </div>
          <div className="shopDiv1 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv2 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <p className="absolute customFont font-black text-white text-5xl text-center">
              APPAREL
            </p>
            <img src={secondPhoto} alt="gym photo" />
          </div>
          <div className="shopDiv2 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv3 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <p className="absolute customFont font-black text-white text-5xl text-center">
              DEALS
            </p>
            <img src={thirdPhoto} alt="gym photo" />
          </div>
          <div className="shopDiv3 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
        <div className="w-full dealDiv4 hover:shadow-2xl hover:transform hover:scale-110 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <p className="absolute customFont font-black text-white text-[42px] text-center">
              HOME GYM BUNDLES
            </p>
            <img src={fourthPhoto} alt="gym photo" />
          </div>
          <div className="shopDiv4 opacity-0 flex justify-center items-center bg-white py-2">
            Shop now
          </div>
        </div>
      </div>
    </section>
  );
};
export default Deals;
