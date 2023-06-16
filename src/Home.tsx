import { useState } from "react";
import Logo from "./assets/logo.png";
import LogoText from "./assets/PHOTOSNAP.png";
import X from "./assets/X.png";
import firstImage from "./assets/home/mobile/create-and-share.jpg";
import secondImage from "./assets/home/mobile/beautiful-stories.jpg";
import thirdImage from "./assets/home/mobile/designed-for-everyone.jpg";
import Rectangle from "./assets/home/mobile/Rectangle.png";
import whiteArrow from "./assets/arrow.png";
import blackArrow from "./assets/blackArrow.png";

function Home() {
  const [menu, setMenu] = useState(true);
  const handleMenuClick = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="p-[24px] flex  ">
        <img className="w-[16px] h-[16px]" src={Logo} alt="" />
        <img className="ml-2 h-[16px]" src={LogoText} alt="" />
        <div className="ml-[140px]" onClick={handleMenuClick}>
          {menu ? (
            <div className=" flex flex-col gap-[4px]">
              <hr className="  bg-black w-[20px] h-[2px]"></hr>
              <hr className="  bg-black w-[20px] h-[3px]"></hr>
            </div>
          ) : (
            <img className=" w-[15px] h-[15px]" src={X} alt="" />
          )}
        </div>
      </div>
      <div>
        <img src={firstImage} alt="" />
        <div className="bg-black pl-[33px] pr-[24px] pb-[72px]">
          <img className="" src={Rectangle} alt="" />
          <p className="mt-[66px] mb-[18px] font-bold text-[32px] font-sans tracking-widest leading-[40px] text-white">
            CREATE AND SHARE YOUR PHOTO STORIES.
          </p>
          <p className="text-white opacity-40 mb-[23px] font-sans leading-[25px]">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="flex flex-row ">
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
      <div>
        <img src={secondImage} alt="" />
        <div className=" pl-[33px] pr-[24px] pb-[72px]">
          <p className="mt-[66px] mb-[18px] font-bold text-[32px] font-sans tracking-[3.33px] leading-[40px] w-[318px] ">
            BEAUTIFUL STORIES <br /> EVERY TIME
          </p>
          <p className=" opacity-60 mb-[23px] font-sans leading-[25px]">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="flex flex-row ">
            <p className="font-sans leading-[16px] text-[12px] tracking-[2px] font-bold">
              VIEW THE STORIES
            </p>
            <img
              className="h-[12px] mt-[2px] ml-[18px]"
              src={blackArrow}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <img src={thirdImage} alt="" />
        <div className=" pl-[33px] pr-[24px] pb-[72px]">
          <p className="mt-[66px] mb-[18px] font-bold text-[32px] font-sans tracking-[3.33px] leading-[40px] w-[318px] ">
            DESIGNED FOR EVERYONE
          </p>
          <p className=" opacity-60 mb-[23px] font-sans leading-[25px]">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="flex flex-row ">
            <p className="font-sans leading-[16px] text-[12px] tracking-[2px] font-bold">
              VIEW THE STORIES
            </p>
            <img
              className="h-[12px] mt-[2px] ml-[18px]"
              src={blackArrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
