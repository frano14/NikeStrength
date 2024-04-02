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
      <h2 className="text-[36px] font-medium customFont mb-16">
        DOUBLE WITH WATER
      </h2>
      <div className="grid grid-cols-3 w-full gap-x-16 gap-y-10">
        <div className="flex justify-center items-start flex-col">
          <img src={one} alt="one" />
          <p className=" font-bold my-2 text-[22px]">NIKE GRIND BUMPER</p>
          <p className="text-[14px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className="  row-span-2">
          <img src={firstPhoto} alt="women in gym" />
        </div>
        <div className="flex justify-center items-start flex-col">
          <img src={two} alt="one" />
          <p className=" font-bold my-2 text-[22px]">DUMBBELLS</p>
          <p className="text-[14px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className=" flex justify-center items-start flex-col">
          <img src={three} alt="one" />
          <p className=" font-bold my-2 text-[22px]">GETTING STARTED</p>
          <p className="text-[14px] mb-2">
            We recognized that exercise is not just a solitary practice. It's
            about the connections you make with others.
          </p>
          <div className="grayBg rounded-3xl p-2">Shop Now</div>
        </div>
        <div className=" flex justify-center items-start flex-col">
          <img src={four} alt="one" />
          <p className=" font-bold my-2 text-[22px]">HOME GYP</p>
          <p className="text-[14px] mb-2">
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
