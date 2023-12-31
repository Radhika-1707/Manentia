import React from "react";
import TabComponent from "./tabComponent";
import webApp from "../../assets/website-content.svg";
import SEO from "../../assets/seo.svg";
import immersive from '../../assets/immersive.svg'
import coding from '../../assets/coding.svg'
type Props = {};

function Details({ }: Props) {
  return (
    <>
      <div className="grid grid-cols-4 gap-0  mt-8  mb-7  w-[83%] mx-auto ">
        <div>
          <TabComponent
            backgroundColor="bg-[#EFEAFF]"
            heading="Web Application"
            image={webApp}
          />
        </div>
        <div>
          <TabComponent
            backgroundColor="bg-[#ECFFDA]"
            heading="SEO"
            image={SEO}
          />
        </div>
        <div>
          <TabComponent
            backgroundColor="bg-[#DAE6FF]"
            heading="AR/VR Solutions"
            image={immersive}
          />
        </div>
        <div>
          <TabComponent
            backgroundColor="bg-[#FFE5DA]"
            heading="Mobile Applications"
            image={coding}
          />
        </div>

      </div>
      <div className="border-b-[2px] "></div>
    </>
  );
}

export default Details;
