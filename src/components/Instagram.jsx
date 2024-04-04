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
        <p className="text-[15px]">@NIKESTRENGTH</p>
        <h2 className="text-[34px] font-medium customFont ss:mb-16 mb-8 text-center">
          FOLLOW US AN INSTAGRAM AND TAG
        </h2>
        <div className="grid ss:grid-cols-6 grid-cols-4 ss:gap-x-4 gap-x-1">
          <img src={ig4st} className="ss:flex hidden" />
          <img src={ig5st} />
          <img src={ig1st} />
          <img src={ig3st} />
          <img src={ig2st} />
          <img src={ig6st} className="ss:flex hidden" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
