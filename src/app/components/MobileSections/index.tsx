import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
type Props = {
    image: StaticImageData
    isImageRight?: boolean
    smileyBg?: string
    data: ReactNode
    imageClassName: string
};

function MobileSections({ image, isImageRight, smileyBg, data, imageClassName }: Props) {
    return (
        <>
            {isImageRight ? (
                <div className="grid grid-cols-2 md:w-[80%] md:mx-auto lg:w-[80%] lg:mx-auto xl:w-[80%] xl:mx-auto">
                    <div className="mx-auto mt-[70px]">

                        <div className="flex">

                            <div className={` ${smileyBg} w-[58px] h-[58px] rounded-full flex items-center justify-center`}>
                                <Image src={"/happy.svg"} alt="" height={30} width={30} />

                            </div>

                            <div className="mx-3">
                                <h1 className="text-[17px] text-[#000000] font-medium leading-[29px]">
                                    Lorem Ipsum is simply dummy text
                                </h1>
                                <p className="text-[14px] text-[#868686] font-normal leading-[25px]">
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                        </div>
                        <div className="mt-[25px]">
                            <h1 className="text-[30px] text-[#252525] font-semibold">
                                <span className="text-[#1090CB] font-semibold">Lorem Ipsum</span>  is simply dummy <br /> text of the printing.{" "}
                            </h1>
                            <p className="mt-[15px] text-[16px] text-[#545454] font-normal ">
                                {data}
                            </p>
                        </div>
                    </div>
                    <>
                        <div className="flex justify-start items-center relative">
                            <Image className={`${imageClassName}   `} src={image} alt="" height={511} width={638} />
                            <div className=" absolute  flex  justify-end  w-full opacity-[0.6]  ">
                                <Image src={"/purple.svg"} alt="" height={105} width={397} />
                            </div>
                        </div>

                    </>


                </div>
            ) : (
                <div className="grid grid-cols-2">
                    <>
                        <div className="relative flex justify-end items-center">
                            <Image className={`${imageClassName} `} src={image} alt="" height={545} width={600} />
                            <div className=" absolute  flex  justify-start   w-full opacity-[0.6]  ">
                                <Image src={"/yellow.svg"} alt="" height={105} width={397} />

                            </div>
                        </div>
                    </>
                    <div className="mx-auto mt-[70px]">
                        <div className="flex">
                            <div className={` ${smileyBg} w-[58px] h-[58px] rounded-full flex items-center justify-center`}>
                                <Image src={"/happy.svg"} alt="" height={30} width={30} />
                            </div>
                            <div className="mx-3">
                                <h1 className="text-[17px] text-[#000000] font-medium leading-[29px]">
                                    Lorem Ipsum is simply dummy text
                                </h1>
                                <p className="text-[14px] text-[#868686] font-normal leading-[25px]">
                                    Lorem Ipsum is simply dummy text
                                </p>
                            </div>
                        </div>
                        <div className="mt-[25px]">
                            <h1 className="text-[30px] text-[#252525] font-semibold">
                                <span className="text-[#1090CB] font-semibold">Lorem Ipsum</span>  is simply dummy <br /> text of the printing.{" "}
                            </h1>
                            <p className="mt-[15px] text-[16px] text-[#545454] font-normal ">
                                {data}
                            </p>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}

export default MobileSections;
