import React from "react";
import LeBron from "../assets/LeBron.webp";
import Wilson from "../assets/Wilson.webp";
import Hatz from "../assets/Hatz.webp";

const Athletes = () => {
  return (
    <section
      id="athletes"
      className="sm:py-16 py-6 xl:max-w-[1200px] w-full xl:px-0 sm:px-16 px-6 m-auto flex justify-center items-center flex-col"
    >
      <p className="text-[16px]">PROVEN AND TESTED BY</p>
      <h2 className="text-[36px] font-medium customFont ss:mb-16 mb-8 text-center">
        CHAMPIONSHIP ATHLETES
      </h2>
      <div className="w-full grid xs:grid-cols-3 grid-cols-1 gap-8">
        <div>
          <div className=" relative">
            <img src={LeBron} alt="Hatz" />
            <div className="overlay md:text-[18px] sm:text-[16px] ss:text-[14px] xs:text-[10px] text-[18px] cursor-pointer absolute top-0 left-0 w-full h-full sm:p-4 p-2  text-center text-white flex justify-center items-center opacity-0 hover:opacity-100">
              LeBron Raymone James Sr. is an American professional basketball
              player for the Los Angeles Lakers of the National Basketball
              Association.
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[20px] text-center cursor-pointer">
              LEBRON JAMES
            </p>
            <p className=" text-[12px] text-center cursor-pointer">
              Basketball player
            </p>
          </div>
        </div>
        <div>
          <div className=" relative">
            <img src={Hatz} alt="Hatz" />
            <div className="overlay cursor-pointer absolute top-0 left-0 w-full h-full  md:text-[18px] sm:text-[16px] ss:text-[14px] xs:text-[10px] text-[18px] sm:p-4 p-2 text-center text-white flex justify-center items-center opacity-0 hover:opacity-100">
              Beatriz Alexa Hatz is an American Paralympic athlete who competes
              in long jump and sprinting events at international track and field
              competitions.
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[20px] text-center cursor-pointer">
              BEATRIZ HATZ
            </p>
            <p className=" text-[12px] text-center cursor-pointer">
              Olymic athlete
            </p>
          </div>
        </div>
        <div>
          <div className=" relative">
            <img src={Wilson} alt="Hatz" />
            <div className="overlay cursor-pointer absolute top-0 left-0 w-full h-full  md:text-[18px] sm:text-[16px] ss:text-[14px] xs:text-[10px] text-[18px] sm:p-4 p-2 text-center text-white flex justify-center items-center opacity-0 hover:opacity-100">
              Russell Carrington Wilson is an American football quarterback for
              the Pittsburgh Steelers of the National Football League.
            </div>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[20px] text-center cursor-pointer">
              RUSSELL WILSON
            </p>
            <p className=" text-[12px] text-center cursor-pointer">
              American football player
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Athletes;
