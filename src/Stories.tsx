import moonOfAppalacia from "./assets/stories/mobile/moon-of-appalacia.jpg";
import whiteArrow from "./assets/arrow.png";

function Stories() {
  return (
    <>
      <div>
        <div>
          <div
            className="w-[375px] h-[315px] md:hidden"
            style={{ backgroundImage: `url(${moonOfAppalacia})` }}
          ></div>
          <div className="pl-[30px] pr-[30px] pt-[50px] pb-[50px] bg-black md:flex md:flex-col md:pb-[90px] md:relative lg:pl-[112px] md:bg-[url('./assets/stories/tablet/moon-of-appalacia.jpg')] lg:bg-[url('./assets/stories/desktop/moon-of-appalacia.jpg')] lg:w-100% lg:bg-cover">
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
            <div className="flex flex-row mt-5 cursor:pointer ">
              <p className="font-sans text-white text-[12px] tracking-[2px] leading-[14px] font-bold hover:underline ">
                READ THE STORY
              </p>
              <img className="h-[12px] mt-[2px] ml-4" src={whiteArrow} alt="" />
            </div>
            <div className="bg-black gradient w-full h-full absolute  bottom-0 left-0 z-[-1]  "></div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/mountains.jpg')]  md:bg-[url('./assets/stories/desktop/mountains.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/cityscapes.jpg')]  md:bg-[url('./assets/stories/desktop/cityscapes.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
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
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/18-days-voyage.jpg')]  md:bg-[url('./assets/stories/desktop/18-days-voyage.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px]">
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
            <div className="w-[375px] h-[375px] relative  md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/architecturals.jpg')]  md:bg-[url('./assets/stories/desktop/architecturals.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative  md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/world-tour.jpg')]  md:bg-[url('./assets/stories/desktop/world-tour.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="w-[375px] h-[375px] relative md:h-[500px] md:bg-cover md:w-[50%] bg-[url('./assets/stories/mobile/unforeseen-corners.jpg')]  md:bg-[url('./assets/stories/desktop/unforeseen-corners.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
          </div>
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/king-on-africa.jpg')]  md:bg-[url('./assets/stories/desktop/king-on-africa.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/trip-to-nowhere.jpg')]  md:bg-[url('./assets/stories/desktop/trip-to-nowhere.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/rage-of-the-sea.jpg')]  md:bg-[url('./assets/stories/desktop/trip-to-nowhere.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px]">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/running-free.jpg')]  md:bg-[url('./assets/stories/desktop/running-free.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
          </div>
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/behind-the-waves.jpg')]  md:bg-[url('./assets/stories/desktop/behind-the-waves.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/calm-waters.jpg')]  md:bg-[url('./assets/stories/desktop/calm-waters.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px]  ">
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
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/milky-way.jpg')]  md:bg-[url('./assets/stories/desktop/milky-way.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/dark-forest.jpg')]  md:bg-[url('./assets/stories/desktop/dark-forest.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
          </div>
          <div className="md:flex lg:w-[50%]">
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/somwarpet.jpg')]  md:bg-[url('./assets/stories/desktop/somwarpet.jpg') ] hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
            <div className="w-[375px] h-[375px] relative md:w-[50%] md:h-[500px] md:bg-cover bg-[url('./assets/stories/mobile/land-of-dreams.jpg')]  md:bg-[url('./assets/stories/desktop/land-of-dreams.jpg')]  hover:translate-y-[-20px] hover:border-b-8 hover:border-b-fuchsia-800">
              <div className="pl-[33px] pr-[24px] relative z-10 ">
                <h1 className="pt-[215px] text-white text-[13px] leading-[17px] font-sans md:pt-[340px] ">
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
        </div>
      </div>
    </>
  );
}
export default Stories;
