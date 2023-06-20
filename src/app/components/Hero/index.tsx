import Image from "next/image";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-[#1090CB]/10 flex justify-between h-screen">
      <div className=" p-14">
        <h1 className="text-[40px]  font-bold text-[#000000] leading-[60px]">
          Experienced mobile and web <br /> applications and website <br />{" "}
          builders measuring.
        </h1>
        <p className="text-[16px] leading-[32px] font-normal text-[#5C5C5C]">
          EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web <br/>
          applications and website builders measuring dozens of completed
          projects.<br/> We build and develop mobile applications for several top
          platforms,<br/> including Android & IOS.{" "}
        </p>
        <div className="flex gap-4">
            <p className="bg-[#1090CB] rounded-[10px] w-[193px] h-[51px] text-[16px] text-white flex justify-center items-center cursor-pointer">Contact Us</p>
            <p className="border border-[#1090CB] rounded-[10px] w-[193px] h-[51px] text-[16px] text-[] flex justify-center items-center cursor-pointer">View more</p>
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <Image src={'/hero/heroImage.svg'} alt=""  height={763} width={509} className=" mt-[-50px]"/>
      </div>
    </div>
  );
}

export default Hero;
