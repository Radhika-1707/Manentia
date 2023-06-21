import React from "react";

type Props = {};

function Containers({ }: Props) {
    return (
        <div className="grid grid-cols-2 mt-[100px] gap-0 w-[85%] mx-auto">
            <div className="bg-[#F4F4F4] rounded-[20px] w-[572px]  mx-auto pb-10">
                <h1 className="text-center  pt-10 text-[25px] font-semibold leading-[42px]">
                    Lorem Ipsum is simply <br /> dummy text.
                </h1>
                <p className="text-center mt-[26px]">
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br /> mobile and web
                    applications and website builders <br />measuring dozens of completed
                    projects. We build and <br />develop mobile applications for several top
                    platforms, <br />including Android & IOS.
                </p>
                <div className="bg-[#1090CB] cursor-pointer  rounded-[10px] w-[153px] h-[49px] flex justify-center items-center mx-auto mt-[36px]">
                    <p className="text-white text-[16px] font-medium"> View More</p>
                </div>
            </div>
            <div className="bg-[#1090CB] rounded-[20px] w-[572px]  mx-auto pb-10">
                <h1 className="text-center  text-white pt-10 text-[25px] font-semibold leading-[42px]">
                    Lorem Ipsum is simply <br /> dummy text.
                </h1>
                <p className="text-center text-white mt-[26px]">
                    KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br /> mobile and web
                    applications and website builders <br />measuring dozens of completed
                    projects. We build and <br />develop mobile applications for several top
                    platforms, <br />including Android & IOS.
                </p>
                <div className="bg-[#FFFFFF]  cursor-pointer rounded-[10px] w-[153px] h-[49px] flex justify-center items-center mx-auto mt-[36px]">
                    <p className="text-[#1090CB] text-[16px] font-medium"> View More</p>
                </div>
            </div>
        </div>
    );
}

export default Containers;
