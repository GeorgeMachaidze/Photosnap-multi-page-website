import hero from "./assets/pricing/mobile/hero.jpg";
import rectangle from "./assets/home/mobile/Rectangle.png";

function Pricing() {
  return (
    <>
      <div>
        <img src={hero} alt="" />
        <div className="bg-black pl-[33px] pr-[24px] pb-[72px]">
          <img src={rectangle} alt="" />
          <div>
            <h1 className="text-white font-sans font-bold tracking-[3.33px] leading-10 mt-[66px] text-[32px]">
              FEATURES
            </h1>
            <p className="text-white font-sans font-[15px] leading-[25px] opacity-60 mt-4">
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <div className="pt-[64px] pl-[60px] pr-[60px] flex items-center">
          <h1 className="font-sans font-bold">Monthly</h1>
          <div className="ml-8 mr-8">
            <div className="w-[64px] h-[32px] bg-gray-300 rounded-[16px] pt-1">
              <div className="bg-black w-[24px] h-[24px] ml-1 rounded-full"></div>
            </div>
          </div>
          <h1 className="font-sans opacity-50 font-bold">Yearly</h1>
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
              $19.00
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
              $39.00
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
              $99.00
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
          <h1 className="font-sans">THE FEATURES</h1>
        </div>
      </div>
    </>
  );
}
export default Pricing;
