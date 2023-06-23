import { useState } from "react";
import hero from "./assets/pricing/mobile/hero.jpg";
import rectangle from "./assets/home/mobile/Rectangle.png";
import footerImage from "./assets/footerImage.jpg";
import whiteArrow from "./assets/arrow.png";

function Pricing() {
  const [price, setPrice] = useState(true);
  const handlePriceChange = () => {
    setPrice(!price);
  };
  return (
    <>
      <div>
        <img src={hero} alt="" />
        <div className="bg-black pl-[33px] pr-[24px] pb-[72px]">
          <img src={rectangle} alt="" />
          <div>
            <h1 className="text-white font-sans font-bold tracking-[3.33px] leading-10 mt-[66px] text-[32px]">
              PRICING
            </h1>
            <p className="text-white font-sans font-[15px] leading-[25px] opacity-60 mt-4">
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
        <div className="pt-[64px] pl-[60px] pr-[60px] flex items-center">
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
        <div className="ml-[28px] mr-[28px]">
          <div className="mt-10 pl-[29px] pr-[29px] items-center flex flex-col bg-gray-100">
            <h1 className="font-sans font-bold text-[24px]  mt-[56px]">
              Basic
            </h1>
            <p className="font-sans leading-[25px] text-[15px] opacity-60 mt-[18px] text-center">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
              {price ? "$19.00" : "$190.00"}
            </h1>
            <p className="font-sans opacity-60 text-[15px] leading-[25px]">
              per month
            </p>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-black">
              <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[28px] mr-[28px]">
          <img className=" mt-10 h-[6px] w-screen" src={rectangle} alt="" />
          <div className=" pl-[29px] pr-[29px] items-center flex flex-col bg-black">
            <h1 className="font-sans font-bold text-[24px] text-white  mt-[56px]">
              Pro
            </h1>
            <p className="font-sans leading-[25px] text-[15px] opacity-60 mt-[18px] text-white text-center">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-white text-center mt-10">
              {price ? "$39.00" : "$390.00"}
            </h1>
            <p className="font-sans opacity-60 text-white text-[15px] leading-[25px]">
              per month
            </p>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-white">
              <p className=" font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[28px] mr-[28px]">
          <div className="mt-10 pl-[29px] pr-[29px] items-center flex flex-col bg-gray-100">
            <h1 className="font-sans font-bold text-[24px]  mt-[56px]">
              Business
            </h1>
            <p className="font-sans leading-[25px] text-[15px] opacity-60 mt-[18px] text-center">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <h1 className="font-sans font-bold text-[40px] tracking-[4.16px] leading-[48px] text-center mt-10">
              {price ? "$99.00" : "$990.00"}
            </h1>
            <p className="font-sans opacity-60 text-[15px] leading-[25px]">
              per month
            </p>
            <div className="mt-10 mb-[52px] flex justify-center items-center w-[245px] h-10 bg-black">
              <p className="text-white font-bold leading-[16px] tracking-[2px] text-[12px] ">
                PICK PLAN
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[28px] mr-[28px] mt-[64px]">
          <h1 className="font-sans font-bold text-3 leading-4 tracking-[2px]">
            THE FEATURES
          </h1>
          <hr className="w-full h-[2px] mt-[23px] bg-black" />
          <div className="mt-[23px]">
            <h1 className="font-sans font-bold text-3 leading-4 tracking-[2px]">
              UNLIMITED STORY POSTING
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              UNLIMITED PHOTO UPLOAD
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              EMBEDDING CUSTOM CONTENT
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              CUSTOMIZE METADATA
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              ADVANCED METRICS
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              PHOTO DOWNLOADS
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              SEARCH ENGINE INDEXING
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
            <h1 className="font-sans font-bold text-3 mt-[24px] leading-4 tracking-[2px]">
              CUSTOM ANALYTICS
            </h1>
            <div className="mt-4 flex justify-between ">
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  BASIC
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
                  PRO
                </p>
              </div>
              <div>
                <p className="font-sans font-bold opacity-60 leading-[13px] tracking-[1.66px] text-[10px] ">
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
        <div
          className="w-[375px] h-[288px] pl-[32px] pr-[33px] mt-[64px] "
          style={{ backgroundImage: `url(${footerImage})` }}
        >
          <img src={rectangle} alt="" />
          <div className="mt-[58px]">
            <h1 className="text-white font-sans font-bold text-[32px] leading-[40px] tracking-[3.33px] ">
              WE’RE IN BETA. GET YOUR INVITE TODAY!
            </h1>
            <div className="flex flex-row pt-[26px]">
              <p className="text-white font-sans leading-[16px] text-[12px] tracking-[2px] font-bold">
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
