import React from "react";
import nikeImg from "../assets/nike.png";
import instgram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";

const FooterSec = () => {
  return (
    <>
      <section
        id="footer"
        className="bg-black text-white grayBottomBorderButton"
      >
        <div className="sm:py-16 py-6 xl:max-w-[1200px] w-full xl:px-0 sm:px-16 px-6 m-auto grid grid-cols-4 gap-12">
          <div className="flex justify-start items-start flex-col">
            <img src={nikeImg} alt="nike" className="w-[50px]" />
            <p className="grayText text-[14px] my-4">
              Part of the Sumo family with SendFox and Tidy Cai Learn How to
              start an online bussiness What is the eteaOf Economy?
            </p>
            <div className="flex gap-2">
              <img src={instgram} alt="instagram" />
              <img src={facebook} alt="instagram" />
              <img src={twitter} alt="instagram" />
            </div>
          </div>
          <div className="flex justify-between items-start flex-col">
            <p className="text-[20px] font-semibold">PRODUCT</p>
            <ul className="grayText flex flex-col gap-2 text-[14px]">
              <li>Dumbbells</li>
              <li>Kettlebells</li>
              <li>Barbells & plates</li>
              <li>Benches & rocks</li>
              <li>Appare</li>
            </ul>
          </div>
          <div className="flex justify-between items-start flex-col">
            <p className="text-[20px] font-semibold">SUPPORT</p>
            <ul className="grayText flex flex-col gap-2 text-[14px]">
              <li>Otders</li>
              <li>Shipping & Delivery</li>
              <li>Return & Refund</li>
              <li>Wholesale</li>
              <li>Military D</li>
            </ul>
          </div>
          <div className="flex justify-sstart items-start flex-col">
            <p className="text-[20px] font-semibold">Join the list</p>
            <div className="mt-4 flex flex-col gap-2">
              <input
                type="text"
                className="rounded-3xl px-4 py-2 inputBg w-full"
                placeholder="Your Email Address"
              />
              <button className="rounded-3xl w-full px-4 py-2 bg-white text-black text-center">
                Radi
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4 flex justify-center items-start bg-black grayText">
        frano.gugic8@gmail.com
      </div>
    </>
  );
};

export default FooterSec;
