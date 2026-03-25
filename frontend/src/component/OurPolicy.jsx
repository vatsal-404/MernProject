import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const OurPolicy = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] md:h-[70vh] flex items-center
    justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025]
    gap-[50px]"
    >
      <div className="h-[8%] w-[100%] text-center mt-[70px]">
        <Title text1={"Our "} text2={"Policy"} />
        <p
          className="w-[100%] m-auto text-[13px] md:text-[20px]
            px-[10px] text-blue-100"
        >
          Customer-Friendly Policies - Committed to your Satisfaction and
          Safety.
        </p>
      </div>
      <div
        className="w-[100%] md:min-h-[50%] h-[20%] flex items-center
        justify-center flex-wrap lg:gap-[50px] gap-[80px]"
      >
        <div
          className="w-[400px] max-w-[90%] h-[60%] flex
            items-center justify-center flex-col gap-[10px]"
        >
          <RiExchangeFundsLine
            className="md:w-[60px] w-[30px] h-[30px]
                md:h-[60px] text-[#90b9ff]"
          />
          <p
            className="font-semibold md:text-[25px]
                text-[19px] text-[#a5e8f7]"
          >
            Easy Exchange
          </p>
          <p
            className="font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center"
          >
            Exchange made Easy - Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>
        <div
          className="w-[400px] max-w-[90%] h-[60%] flex
            items-center justify-center flex-col gap-[10px]"
        >
          <RiDiscountPercentFill
            className="md:w-[60px] w-[30px] h-[30px]
                md:h-[60px] text-[#90b9ff]"
          />
          <p
            className="font-semibold md:text-[25px]
                text-[19px] text-[#a5e8f7]"
          >
            7 Days Return Policy
          </p>
          <p
            className="font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center"
          >
            Shop with Confidence - Easy Returns within 7 Days.
          </p>
        </div>
        <div
          className="w-[400px] max-w-[90%] h-[60%] flex
            items-center justify-center flex-col gap-[10px]"
        >
          <BiSupport
            className="md:w-[60px] w-[30px] h-[30px]
                md:h-[60px] text-[#90b9ff]"
          />
          <p
            className="font-semibold md:text-[25px]
                text-[19px] text-[#a5e8f7]"
          >
            Best Customer Support
          </p>
          <p
            className="font-semibold md:text-[18px] text-[12px]
                text-[aliceblue] text-center"
          >
            24/7 Support - We're Here to Help You Anytime, Anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
