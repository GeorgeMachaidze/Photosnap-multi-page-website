import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Home.tsx";
import Stories from "./Stories.tsx";
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

function App() {
  const [menu, setMenu] = useState(true);
  const handleMenuClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Router>
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
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Stories" element={<Stories />} />
        </Routes>
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
      </Router>
    </>
  );
}

export default App;
