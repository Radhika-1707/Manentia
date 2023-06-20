import React from "react";
import TabComponent from "./tabComponent";
import webApp from "../../assets/website-content.svg";
import SEO from "../../assets/seo.svg";
import immersive from '../../assets/immersive.svg'
import coding from '../../assets/coding.svg'
type Props = {};

function Details({}: Props) {
  return (
    <div className="grid grid-cols-4 gap-0  mt-3 ">
      
        <TabComponent
          backgroundColor="bg-[#EFEAFF]"
          heading="Web Application"
          image={webApp}
        />
      
        <TabComponent
          backgroundColor="bg-[#ECFFDA]"
          heading="SEO"
          image={SEO}
        />
      
        <TabComponent
          backgroundColor="bg-[#DAE6FF]"
          heading="AR/VR Solutions"
          image={immersive}
        />
      
        <TabComponent
          backgroundColor="bg-[#FFE5DA]"
          heading="Mobile Applications"
          image={coding}
        />
      
    </div>
  );
}

export default Details;
