import { useState } from "react";
import hero from "./assets/pricing/mobile/hero.jpg";
import rectangle from "./assets/home/mobile/Rectangle.png";
import whiteArrow from "./assets/arrow.png";
import tabletHero from "./assets/pricing/tablet/hero.jpg";
import rectangleTablet from "./assets/features/tablet/rectangleTablet.png";
import rectangleForPricingTablet from "./assets/pricing/tablet/rectangleForPricingTablet.png";

function Pricing() {
  const [price, setPrice] = useState(true);
  const handlePriceChange = () => {
    setPrice(!price);
  };
  return (
    <>
      <div>
        <div className="md:flex">
          <img className="md:hidden" src={hero} alt="" />
          <div className="bg-black pl-[33px] pr-[24px] pb-[72px] md:flex md:justify-center items-center md:pb-0">
            <img
              className="hidden md:flex md:ml-[-33px]"
              src={rectangleTablet}
              alt=""
            />
            <img className="md:hidden" src={rectangle} alt="" />
            <div>
              <div className="md:ml-[48px]">
                <h1 className="text-white font-sans font-bold tracking-[3.33px] leading-10 mt-[66px] text-[32px] md:mt-0">
                  PRICING
                </h1>
                <p className="text-white font-sans font-[15px] leading-[25px] opacity-60 mt-4 ">
                  Create a your stories, Photosnap is a platform for
                  photographers and visual storytellers. It’s the simple
                  <br className="hidden md:flex" /> way to create and share your
                  photos.
                </p>
              </div>
            </div>
          </div>
          <img className="hidden md:flex" src={tabletHero} alt="" />
        </div>
        <div className="pt-[64px] pl-[60px] pr-[60px] flex items-center md:justify-center md:mt-[112px] md:pb-[40px]">
          <h1
            className={`font-sans font-bold ${
              price ? "text-black" : "opacity-50"
            }`}
          >
            Monthly
          </h1>
          <div onClick={handlePriceChange} className="ml-8 mr-8">
            <div
              className={`w-[64px] h-[32px] rounded-[16px] pt-1 ${
                price ? "bg-gray-300" : "bg-black"
              }`}
            >
              <div
                className={` w-[24px] h-[24px]  rounded-full ${
                  price ? "bg-black ml-1" : "bg-white ml-[36px]"
                } `}
              ></div>
            </div>
          </div>
          <h1
            className={`font-sans  font-bold ${
              price ? "opacity-50" : "text-black"
            }`}
          >
            Yearly
          </h1>
        </div>
        <div className="ml-[28px] mr-[28px] md:ml-[40px] md:mr-[40px]">
          <div className="mt-10 pl-[29px] pr-[29px] items-center flex flex-col bg-gray-100  md:items-start md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:w-[50%] md:items-start md:ml-[40px] ">
              <h1 className="font-sans font-bold text-[24px]  mt-[56px] md:mt-[30px] ">
                Basic
              </h1>
              <p className="font-sans leading-[25px] text-[15px] opacity-60 mt-[18px] text-center md:text-left">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              <div className="mt-10 mb-[52px] hidden justify-center items-center w-[245px] h-10 bg-black md:flex">
                <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                  PICK PLAN
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row  md:order-[1] md:hidden ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
                {price ? "$19.00" : "$190.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px]">
                per month
              </p>
            </div>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-black md:hidden">
              <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
            <div className=" hidden md:flex-col md:flex  md:width-[50%] md:items-end md:mr-[40px]   ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
                {price ? "$19.00" : "$190.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px]">
                per month
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[28px] mr-[28px] md:ml-[40px] md:mr-[40px]">
          <img
            className=" mt-10 h-[6px] w-screen md:hidden"
            src={rectangle}
            alt=""
          />

          <div className="md:mt-[24px] pl-[29px] pr-[29px] items-center flex flex-col bg-black  md:items-start md:flex-row md:justify-between md:pl-0">
            <img
              className="hidden md:flex "
              src={rectangleForPricingTablet}
              alt=""
            />
            <div className="flex flex-col items-center md:w-[50%] md:items-start md:ml-[34px] ">
              <h1 className="font-sans font-bold text-[24px]  mt-[56px] text-white md:mt-[30px] ">
                Pro
              </h1>
              <p className="font-sans leading-[25px] text-white text-[15px] opacity-60 mt-[15px] text-center md:text-left">
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
              <div className="mt-10 mb-[52px] hidden justify-center items-center w-[245px] h-10 bg-white md:flex md:mb-[40px] md:mt-[32px]">
                <p className="text-black font-bold leading-[16px] tracking-[2px] text-[12px] ">
                  PICK PLAN
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row  md:order-[1] md:hidden text-white ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10 text-white">
                {price ? "39.00" : "$390.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px]">
                per month
              </p>
            </div>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-white md:hidden">
              <p className="text-black font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
            <div className=" hidden md:flex-col md:flex  md:width-[50%] md:items-end md:mr-[40px]   ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10 text-white">
                {price ? "$39.00" : "$390.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px] text-white">
                per month
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[28px] mr-[28px] md:ml-[40px] md:mr-[40px]">
          <div className="mt-10 pl-[29px] pr-[29px] items-center flex flex-col bg-gray-100  md:items-start md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:w-[50%] md:items-start md:ml-[40px] ">
              <h1 className="font-sans font-bold text-[24px]  mt-[56px] md:mt-[30px] ">
                Business
              </h1>
              <p className="font-sans leading-[25px] text-[15px] opacity-60 mt-[18px] text-center md:text-left">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
              <div className="mt-10 mb-[52px] hidden justify-center items-center w-[245px] h-10 bg-black md:flex">
                <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                  PICK PLAN
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row  md:order-[1] md:hidden ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
                {price ? "$99.00" : "$990.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px]">
                per month
              </p>
            </div>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-black md:hidden">
              <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
            <div className=" hidden md:flex-col md:flex  md:width-[50%] md:items-end md:mr-[40px]   ">
              <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
                {price ? "$99.00" : "$990.00"}
              </h1>
              <p className="font-sans opacity-60 text-[15px] leading-[25px]">
                per month
              </p>
            </div>
          </div>
        </div>
        <h1 className="hidden md:flex md:justify-center md:font-sans md:font-bold md:text-[40px] md:mt-[112px] tracking-[4.1px] leading-[48px]">
          COMPARE
        </h1>
        <div className="ml-[28px] mr-[28px] mt-[64px]">
          <div className="md:flex md:ml-[20px] md:justify-between md:mr-[20px]">
            <div>
              <h1 className="font-sans font-bold text-3 leading-4 tracking-[2px] md:text-[12px]">
                THE FEATURES
              </h1>
            </div>
            <div className="md:flex md:flex:row md:gap-[110px]">
              <h1 className="hidden font-sans font-bold text-3 leading-4 tracking-[2px] md:flex md:ml-[210px] md:text-[12px]">
                Basic
              </h1>
              <h1 className="hidden font-sans font-bold text-3 leading-4 tracking-[2px] md:flex md:text-[12px]">
                Pro
              </h1>
              <h1 className="hidden font-sans font-bold text-3 leading-4 tracking-[2px] md:flex md:text-[12px]">
                Business
              </h1>
            </div>
          </div>

          <hr className="w-full h-[2px] mt-[23px] bg-black" />
          <div className="mt-[23px]">
            <h1 className="font-sans font-bold text-3 leading-4 tracking-[2px] md:text-[12px]">
              UNLIMITED STORY POSTING
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px] ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BASIC
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  PRO
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              UNLIMITED PHOTO UPLOAD
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px] ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BASIC
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  PRO
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              EMBEDDING CUSTOM CONTENT
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px] ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  PRO
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              CUSTOMIZE METADATA
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px] ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  PRO
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              ADVANCED METRICS
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px] ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              PHOTO DOWNLOADS
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px]">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              SEARCH ENGINE INDEXING
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px]">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px] md:text-[12px]">
              CUSTOM ANALYTICS
            </h1>
            <div className="mt-4 flex justify-between md:justify-end md:gap-[124px] md:mr-[62px] md:mt-[-25px]">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] md:hidden ">
                  BUSINESS
                </p>
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="15"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 8.124L5.623 13 17 1"
                  />
                </svg>
              </div>
            </div>
            <hr className="w-full h-[2px] mt-[24px] bg-gray-300" />
          </div>
        </div>

        <div className="w-[375px] h-[280px] pl-[32px] pr-[33px] md:w-full md:h-[280px] bg-[url('./assets/footerTablet.png')] md:flex md:flex-row md:pl-0 ">
          <img className="md:hidden" src={rectangle} alt="" />
          <img
            className="hidden md:block "
            src={rectangleForPricingTablet}
            alt=""
          />
          <div className="mt-[58px] md:flex md:flex-row md:mt-0 md:ml-[33px] ">
            <h1 className="text-white font-sans font-bold text-[32px] leading-[40px] tracking-[3.33px] md:mt-[68px] md:text-[40px] md:tracking-[4.4px] md:leading-[48px] ">
              WE’RE IN BETA. <br className="hidden md:flex" /> GET YOUR INVITE
              <br className="hidden md:flex" />
              TODAY!
            </h1>
            <div className="flex flex-row pt-[26px] md:mt-[110px] md:ml-[123px] ">
              <p className="text-white font-sans leading-[16px] text-[12px] tracking-[2px] font-bold md:leading-none">
                GET AN INVITE
              </p>
              <img
                className="h-[12px] mt-[2px] ml-[18px]"
                src={whiteArrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
