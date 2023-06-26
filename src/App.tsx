import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.tsx";
import Stories from "./Stories.tsx";
import Featured from "./Featured.tsx";
import Pricing from "./Pricing.tsx";
import logo from "./assets/logo.png";
import logoText from "./assets/PHOTOSNAP.png";
import X from "./assets/X.png";
import logoTextWhite from "./assets/PHOTOSNAPWhite.png";
import facebook from "./assets/home/mobile/Facebook.png";
import instagram from "./assets/home/mobile/Instagram.png";
import printerest from "./assets/home/mobile/pinterest.png";
import twitter from "./assets/home/mobile/Twitter.png";
import youtube from "./assets/home/mobile/Youtube.png";
import whiteArrow from "./assets/arrow.png";

const HamburgerMenu = () => {
  return (
    <div className="absolute top-[60px] left-0 bg-white w-full pl-[33px] pr-[33px] flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <Link to={"/Stories"}>
          <h1 className="mt-9 font-sans font-bold text-[15px] leading-5 tracking-[2.5px]">
            STORIES
          </h1>
        </Link>
        <Link to={"/Featured"}>
          <h1 className="font-sans font-bold text-[15px] leading-5 tracking-[2.5px]">
            FEATURES
          </h1>
        </Link>
        <Link to={"/Pricing"}>
          <h1 className="font-sans font-bold text-[15px] leading-5 tracking-[2.5px]">
            PRICING
          </h1>
        </Link>
      </div>
      <hr className="w-full h-[2px] mt-5 bg-black opacity-25" />
      <div className="mt-5 bg-black w-full mb-[32px] ">
        <h1 className="font-sans font-bold text-white text-center text-[15px] tracking-[2.5px] leading-5 mt-[14px] mb-[14px]">
          GET AN INVITE
        </h1>
      </div>
    </div>
  );
};

function App() {
  const [menu, setMenu] = useState(true);
  const handleMenuClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Router>
        <div className="p-[24px] flex items-center md:pb-[16px] ">
          <Link to={"/Home"}>
            <img className="w-[16px] h-[16px]" src={logo} alt="" />
          </Link>
          <Link to={"/Home"}>
            <img className="ml-2 h-[16px]" src={logoText} alt="" />
          </Link>
          <div className="ml-[140px] md:hidden" onClick={handleMenuClick}>
            {menu ? (
              <div className=" flex flex-col gap-[4px]">
                <hr className="  bg-black w-[20px] h-[2px]"></hr>
                <hr className="  bg-black w-[20px] h-[3px]"></hr>
              </div>
            ) : (
              <div>
                <img className=" w-[15px] h-[15px]" src={X} alt="" />
                <HamburgerMenu />
              </div>
            )}
          </div>
          <div className=" hidden md:flex ml-10 gap-[37px] justify-center items-center">
            <Link to="/Stories" className="ml-4">
              <h1 className="font-sans font-bold tracking-[2px] text-[12px]">
                STORIES
              </h1>
            </Link>
            <Link to="/Featured" className="ml-4">
              <h1 className="font-sans font-bold tracking-[2px] text-[12px]">
                FEATURES
              </h1>
            </Link>
            <Link to="/Pricing" className="ml-4">
              <h1 className="font-sans font-bold tracking-[2px] text-[12px]">
                PRICING
              </h1>
            </Link>
            <div className="pt-2 pb-2 pl-[20px] pr-[20px] bg-black">
              <h1 className="text-[12px] font-sans tracking-[2px] font-bold text-white">
                GET AN INVITE
              </h1>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
        <div className="bg-black pb-[56px] md:flex md:justify-between">
          <div className="md:ml-[40px] md:flex md:flex-col">
            <div className="flex justify-center pt-[56px] md:pt-[64px] md:justify-normal md:order-[-2] ">
              <img className="w-[16px] h-[16px]" src={logo} alt="" />
              <img className="ml-2 h-[16px]" src={logoTextWhite} alt="" />
            </div>
            <div className="flex justify-center mt-[32px] gap-[13px] md:justify-normal md:order-[-1] md:mt-[73px]">
              <img className="w-5 h-5" src={facebook} alt="" />
              <img className="w-5 h-5" src={youtube} alt="" />
              <img className="w-5 h-5" src={twitter} alt="" />
              <img className="w-5 h-5" src={printerest} alt="" />
              <img className="w-5 h-5" src={instagram} alt="" />
            </div>

            <div className="flex flex-col gap-5 items-center mt-[50px] md:flex-row md:order-[-2] md:mt-[32px]">
              <Link to={"/Home"}>
                <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
                  HOME
                </h1>
              </Link>
              <Link to={"/Stories"}>
                <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
                  STORIES
                </h1>
              </Link>
              <Link to={"/Featured"}>
                <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
                  FEATURES
                </h1>
              </Link>
              <Link to={"/Pricing"}>
                <h1 className="text-white text-[12px] font-sans font-bold tracking-[2px]">
                  PRICING
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-center pt-[120px] md:pt-[64px] md:justify-right md:ml-10">
              <p className="text-white font-sans leading-[16px] text-[12px] tracking-[2px] font-bold">
                GET AN INVITE
              </p>
              <img
                className="h-[12px] mt-[2px] ml-[18px]"
                src={whiteArrow}
                alt=""
              />
            </div>
            <p className="pt-10 text-white opacity-60 text-center md:pt-[120px] md:mr-[40px] md:text-[15px] md:text-right">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
