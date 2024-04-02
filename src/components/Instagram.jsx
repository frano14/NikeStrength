import React from "react";
import firstPhoto from "../assets/deals1stPhoto.webp";
import ig1st from "../assets/ig1st.webp";
import ig2st from "../assets/ig2st.webp";
import ig3st from "../assets/ig3st.webp";
import ig4st from "../assets/ig4st.jpeg";
import ig5st from "../assets/ig5st.webp";
import ig6st from "../assets/ig6st.jpeg";

const Instagram = () => {
  return (
    <section id="instagram" className="grayBg">
      <div className="sm:py-16 py-6 w-full m-auto flex justify-center items-center flex-col">
        <p className="text-[16px]">YOUR COMPANIONS</p>
        <h2 className="text-[36px] font-medium customFont mb-16">
          DOUBLE WITH WATER
        </h2>
        <div className="grid grid-cols-6 gap-x-4 w-[120%]">
          <img src={ig4st} alt="" />
          <img src={ig5st} alt="" />
          <img src={ig1st} alt="" />
          <img src={ig3st} alt="" />
          <img src={ig2st} alt="" />
          <img src={ig6st} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
