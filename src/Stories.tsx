import moonOfAppalacia from "./assets/stories/mobile/moon-of-appalacia.jpg";
import whiteArrow from "./assets/arrow.png";
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

function Stories() {
  return (
    <>
      <div>
        <div>
          <div
            className="w-[375px] h-[315px] md:hidden"
            style={{ backgroundImage: `url(${moonOfAppalacia})` }}
          ></div>
          <div className="pl-[30px] pr-[30px] pt-[50px] pb-[50px] bg-black md:flex md:flex-col md:pb-[90px] md:relative md:bg-[url('./assets/stories/tablet/moon-of-appalacia.jpg')]">
            <h1 className="text-white text-[12px] font-sans leading-4 font-bold tracking-[2px] md:mt-[122px]">
              LAST MONTH’S FEATURED STORY
            </h1>
            <h1 className="text-white mt-4 leading-10 text-[32px] tracking-[3.3px] font-sans font-bold md:text-[40px] md:tracking-[4.1px] md:leading-[48px]">
              HAZY FULL <br className="hidden md:block" />
              MOON OF <br className="hidden md:block" /> APPALACHIA
            </h1>
            <div className="flex mt-4">
              <h1 className="text-white font-sans text-[13px] leading-[17px] opacity-75">
                March 2nd 2020
              </h1>
              <h1 className="text-white ml-2 font-sans text-[13px] leading-[17px]">
                by John Appleseed
              </h1>
            </div>
            <h1 className="text-white mt-4 font-sans text-[14px] leading-[25px] opacity-60 md:text-[15px]">
              The dissected plateau area, while not actually made up of{" "}
              <br className="hidden md:block" />
              geological mountains, is popularly called "mountains,"{" "}
              <br className="hidden md:block" />
              especially in eastern Kentucky and West Virginia, and{" "}
              <br className="hidden md:block" /> while the ridges are not high,
              the terrain is extremely <br className="hidden md:block" />{" "}
              rugged.
            </h1>
            <div className="flex flex-row mt-5  ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold ">
                READ THE STORY
              </p>
              <img className="h-[12px] mt-[2px] ml-4" src={whiteArrow} alt="" />
            </div>
            <div className="bg-black gradient w-full h-full absolute  bottom-0 left-0 z-[-1]  "></div>
          </div>
        </div>
        <div className="md:flex">
          <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/mountains.jpg')]  md:bg-[url('./assets/stories/desktop/mountains.jpg')]">
            <div className="pl-[33px] pr-[24px] relative z-10 ">
              <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
          </div>
          <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/cityscapes.jpg')]  md:bg-[url('./assets/stories/desktop/cityscapes.jpg')]">
            <div className="pl-[33px] pr-[24px] relative z-10 ">
              <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
          </div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${voyage})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${architecturals})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${world})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${uforeseen})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${lion})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${tree})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${see})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${horse})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${calm})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${milky})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${dark})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${somwarpet})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
        <div
          className="w-[375px] h-[375px] relative"
          style={{ backgroundImage: `url(${dreams})` }}
        >
          <div className="pl-[33px] pr-[24px] relative z-10 ">
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
          <div className="bg-black gradient w-full h-full absolute bottom-0 left-0 z-0 "></div>
        </div>
      </div>
    </>
  );
}
export default Stories;
