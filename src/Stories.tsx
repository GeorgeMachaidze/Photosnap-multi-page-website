import { useState } from "react";
import logo from "./assets/logo.png";
import logoText from "./assets/PHOTOSNAP.png";
import X from "./assets/X.png";
import moonOfAppalacia from "./assets/stories/mobile/moon-of-appalacia.jpg";
import whiteArrow from "./assets/arrow.png";
import mountains from "./assets/stories/mobile/mountains.jpg";
import newYork from "./assets/stories/mobile/cityscapes.jpg";
import voyage from "./assets/stories/mobile/18-days-voyage.jpg";
import architecturals from "./assets/stories/mobile/architecturals.jpg";
import world from "./assets/stories/mobile/world-tour.jpg";
import uforeseen from "./assets/stories/mobile/unforeseen-corners.jpg";
import lion from "./assets/stories/mobile/king-on-africa.jpg";
import tree from "./assets/stories/mobile/trip-to-nowhere.jpg";
import see from "./assets/stories/mobile/rage-of-the-sea.jpg";
import horse from "./assets/stories/mobile/running-free.jpg";
import wave from "./assets/stories/mobile/behind-the-waves.jpg";
import calm from "./assets/stories/mobile/calm-waters.jpg";
import milky from "./assets/stories/mobile/milky-way.jpg";
import dark from "./assets/stories/mobile/dark-forest.jpg";
import somwarpet from "./assets/stories/mobile/somwarpet.jpg";
import dreams from "./assets/stories/mobile/land-of-dreams.jpg";
import logoTextWhite from "./assets/PHOTOSNAPWhite.png";
import facebook from "./assets/home/mobile/Facebook.png";
import instagram from "./assets/home/mobile/Instagram.png";
import printerest from "./assets/home/mobile/pinterest.png";
import twitter from "./assets/home/mobile/Twitter.png";
import youtube from "./assets/home/mobile/Youtube.png";

function Stories() {
  const [menu, setMenu] = useState(true);
  const handleMenuClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div>
        <div className="p-[24px] flex  ">
          <img className="w-[16px] h-[16px]" src={logo} alt="" />
          <img className="ml-2 h-[16px]" src={logoText} alt="" />
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
          <div
            className="w-[375px] h-[315px]"
            style={{ backgroundImage: `url(${moonOfAppalacia})` }}
          ></div>
          <div className="pl-[30px] pr-[30px] pt-[50px] pb-[50px] bg-black">
            <h1 className="text-white text-[12px] font-sans leading-4 font-bold tracking-[2px]">
              LAST MONTH’S FEATURED STORY
            </h1>
            <h1 className="text-white mt-4 leading-10 text-[32px] tracking-[3.3px] font-sans font-bold">
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <div className="flex mt-4">
              <h1 className="text-white font-sans text-[13px] leading-[17px] opacity-75">
                March 2nd 2020
              </h1>
              <h1 className="text-white ml-2 font-sans text-[13px] leading-[17px]">
                by John Appleseed
              </h1>
            </div>
            <h1 className="text-white mt-4 font-sans text-[14px] leading-[25px] opacity-60">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </h1>
            <div className="flex flex-row mt-5">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ THE STORY
              </p>
              <img className="h-[12px] mt-[2px] ml-4" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${mountains})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 16th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px] ">
              The Mountains
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by John Appleseed
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${newYork})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 14th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px] ">
              Sunset Cityscapes
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Benjamin Cruz
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${voyage})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 11th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              18 Days Voyage
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Alexei Borodin
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${architecturals})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 9th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Architecturals
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Samantha Brooke
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${world})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 7th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              World Tour 2019
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Timothy Wagner
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${uforeseen})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 3th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Unforeseen Corners
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by William Malcolm
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${lion})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 29th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              King on Africa: Part II
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Tim Hillenburg
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${tree})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 21th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              The Trip to Nowhere
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Felicia Rourke
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${see})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              April 21th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Rage of The Sea
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Mohammed Abdul
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${horse})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 16th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Running Free
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Michelle
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 11th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Behind the Waves
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Lamarr Wilson
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${calm})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 9th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Calm Waters
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Samantha Brooke
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${milky})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 5th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              The Milky Way
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Benjamin Cruz
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${dark})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 4th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Night at The Dark Forest
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Mohammed Abdul
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${somwarpet})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              March 1st 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Somwarpet’s Beauty
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by Michellel
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px]"
          style={{ backgroundImage: `url(${dreams})` }}
        >
          <div className="pl-[33px] pr-[24px] ">
            <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans ">
              February 25th 2020
            </h1>
            <h1 className="font-sans text-6 font-bold text-white text-[18px] leading-[25px]">
              Land of Dreams
            </h1>
            <p className="mt-[1px] font-sans text-[13px] leading-[18px]  text-white">
              by William Malcolm
            </p>
            <hr className="w-full mt-4 opacity-25" />
            <div className="flex flex-row mt-5 justify-between ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold">
                READ STORY
              </p>
              <img className="h-[12px] mt-[2px]" src={whiteArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-black pb-[56px]">
          <div className="flex justify-center pt-[56px]">
            <img className="w-[16px] h-[16px]" src={logo} alt="" />
            <img className="ml-2 h-[16px]" src={logoTextWhite} alt="" />
          </div>
          <div className="flex justify-center mt-[32px] gap-[13px]">
            <img className="w-5 h-5" src={facebook} alt="" />
            <img className="w-5 h-5" src={youtube} alt="" />
            <img className="w-5 h-5" src={twitter} alt="" />
            <img className="w-5 h-5" src={printerest} alt="" />
            <img className="w-5 h-5" src={instagram} alt="" />
          </div>
          <div className="flex flex-col gap-5 items-center mt-[50px]">
            <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
              HOME
            </h1>
            <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
              STORIES
            </h1>
            <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
              FEATURES
            </h1>
            <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
              PRICING
            </h1>
          </div>
          <div className="flex flex-row justify-center pt-[120px]">
            <p className="text-white font-sans leading-[16px] text-[12px] tracking-[2px] font-bold">
              GET AN INVITE
            </p>
            <img
              className="h-[12px] mt-[2px] ml-[18px]"
              src={whiteArrow}
              alt=""
            />
          </div>
          <p className="pt-10 text-white opacity-60 text-center">
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
export default Stories;
