import React from "react";
import firstPhoto from "../assets/products1stPhoto.webp";
import secondPhoto from "../assets/products2stPhoto.webp";
import thirdPhoto from "../assets/products3stPhoto.webp";
import fourthPhoto from "../assets/products4stPhoto.webp";
import starImg from "../assets/star.png";
import hearthImg from "../assets/hearth.png";
import buyImg from "../assets/checklist.png";

const OurBestProduct = () => {
  return (
    <section
      id="ourbestproduct"
      className="sm:py-16 py-6 xl:max-w-[1200px] xl:px-0 sm:px-16 px-6 w-full m-auto"
    >
      <h2 className="text-[36px] font-medium customFont">
        OUR BEST PRODUCTS🚀
      </h2>
      <div className="flex justify-between items-center mt-12 mb-6">
        <p className="text-black font-medium text-xl bottomBorder">Bundles</p>
        <button className="bg-black cursor-pointer text-white sm:px-6 px-4 sm:py-3 py-[6px] rounded-3xl">
          View All
        </button>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        <div className="p-2 grayBorderButton">
          <div className="relative">
            <img
              src={hearthImg}
              alt="hearth"
              className="absolute top-[6px] right-[6px]"
            />
            <img src={firstPhoto} alt="starter bundle" />
          </div>
          <p className="text-[12px] font-bold">RUN THE RACK DUMBBELL BUNDLER</p>
          <div className="flex justify-start items-center gap-1 mt-[6px] mb-1">
            <img src={starImg} alt="star" className="w-[12px] h-[12px]" />
            <p className="text-[10px]">Free Dumbbell Rock</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-green-600">50% off Shipping</p>
            <img src={buyImg} alt="buy" />
          </div>
        </div>
        <div className="p-2 grayBorderButton">
          <div className="relative">
            <img
              src={hearthImg}
              alt="hearth"
              className="absolute top-[6px] right-[6px]"
            />
            <img src={secondPhoto} alt="starter bundle" />
          </div>
          <p className="text-[12px] font-bold">GETTING STARTED BUNDLE</p>
          <div className="flex justify-start items-center gap-1 mt-[6px] mb-1">
            <img src={starImg} alt="star" className="w-[12px] h-[12px]" />
            <p className="text-[10px]">Free Dumbbell Rock</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-green-600">50% off Shipping</p>
            <img src={buyImg} alt="buy" />
          </div>
        </div>
        <div className="p-2 grayBorderButton">
          <div className="relative">
            <img
              src={hearthImg}
              alt="hearth"
              className="absolute top-[6px] right-[6px]"
            />
            <img src={thirdPhoto} alt="starter bundle" />
          </div>
          <p className="text-[12px] font-bold">KETTLEBELL ESSENTIALS BUNDLE</p>
          <div className="flex justify-start items-center gap-1 mt-[6px] mb-1">
            <img src={starImg} alt="star" className="w-[12px] h-[12px]" />
            <p className="text-[10px]">Free Dumbbell Rock</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-green-600">50% off Shipping</p>
            <img src={buyImg} alt="buy" />
          </div>
        </div>
        <div className="p-2 grayBorderButton">
          <div className="relative">
            <img
              src={hearthImg}
              alt="hearth"
              className="absolute top-[6px] right-[6px]"
            />
            <img src={fourthPhoto} alt="starter bundle" />
          </div>
          <p className="text-[12px] font-bold">THE NIKE SHOE DOG BUNDLE</p>
          <div className="flex justify-start items-center gap-1 mt-[6px] mb-1">
            <img src={starImg} alt="star" className="w-[12px] h-[12px]" />
            <p className="text-[10px]">Free Dumbbell Rock</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[14px] text-green-600">50% off Shipping</p>
            <img src={buyImg} alt="buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBestProduct;
