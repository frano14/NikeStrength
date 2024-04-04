import React from "react";
import firstPhoto from "../assets/DubleWithWater1st.webp";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const DumbleWithWater = () => {
  return (
    <section
      id="dumblewithwater"
      className="sm:py-16 py-6 xl:max-w-[1200px] w-full xl:px-0 sm:px-16 px-6 m-auto flex justify-center items-center flex-col"
    >
      <p className="text-[16px]">YOUR COMPANIONS</p>
      <h2 className="text-[36px] font-medium customFont ss:mb-16 mb-8 text-center">
        DUMBLE WITH WATER
      </h2>
      <div className="grid ss:grid-cols-3 grid-cols-1 w-full sm:gap-x-16 gap-x-4 sm:gap-y-10 gap-4">
        <div className="item flex justify-center ss:items-start items-center flex-col">
          <img src={one} alt="one" />
          <p className=" font-bold my-2 sm:text-[22px] text-[18px]">
            NIKE GRIND BUMPER
          </p>
          <p className="sm:text-[14px] text-[12px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className="item  row-span-2 flex justify-center items-center">
          <img src={firstPhoto} alt="women in gym" className="" />
        </div>
        <div className="item flex justify-center ss:items-start items-center flex-col">
          <img src={two} alt="one" />
          <p className=" font-bold my-2 sm:text-[22px] text-[18px]">
            DUMBBELLS
          </p>
          <p className="sm:text-[14px] text-[12px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className="item flex justify-center ss:items-start items-center flex-col">
          <img src={three} alt="one" />
          <p className=" font-bold my-2 sm:text-[22px] text-[18px]">
            GETTING STARTED
          </p>
          <p className="sm:text-[14px] text-[12px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className="item flex justify-center ss:items-start items-center flex-col">
          <img src={four} alt="one" />
          <p className=" font-bold my-2 sm:text-[22px] text-[18px]">HOME GYP</p>
          <p className="sm:text-[14px] text-[12px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
      </div>
    </section>
  );
};

export default DumbleWithWater;
