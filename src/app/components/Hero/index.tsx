import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-[#1090CB]/10 flex  justify-center  xl:justify-around h-[743px]">
      <div className=" p-16 ">
        <h1 className="text-[40px]   md:text-[38px] lg:text-[45px]  lg:leading-[60px] md:leading-[50px] font-bold text-[#000000] leading-[60px]">
          Experienced <span className="text-[#1090CB]">mobile and web</span>  <br /> applications and website <br />{" "}
          builders measuring.
        </h1>
        <p className="text-[16px] md:text-[15px] leading-[32px] font-normal text-[#5C5C5C] mt-4">
          EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web <br/>
          applications and website builders measuring dozens of completed
          projects.<br /> We build and develop mobile applications for several top
          platforms,<br/> including Android & IOS.{" "}
        </p>
        <div className="flex gap-4 mt-10">
            <p className="bg-[#1090CB] heroButton2  hover:scale-110 rounded-[10px] w-[193px] h-[51px] text-[16px] text-white flex justify-center items-center cursor-pointer">Contact Us</p>
            <p className="border heroButton3 hover:scale-110 border-[#1090CB] rounded-[10px] w-[193px] h-[51px] text-[16px] text-[] flex justify-center items-center cursor-pointer">View more</p>
        </div>
      </div>
      <div className="flex p-16 blob">
        <Image src={'/hero/heroImage.svg'} alt="" height={763} width={509} className=" mt-[-50px] "/>
      </div>
     
      
    </div>
  );
}

export default Hero;
