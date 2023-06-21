import Details from "./components/Details";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MiniHero from "./components/MiniHero";
import MobileSections from "./components/MobileSections";
import mob1 from "../app/assets/mob1.svg";
import mob2 from "../app/assets/mob2.svg";
import focus from "../app/assets/focus.svg";
import Containers from "./components/Container";
import Company from "./components/Company";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Details />
      <MiniHero />
      <MobileSections
        image={mob1}
        isImageRight={true}
        data={
          <>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced <br />
            mobile and web applications and website builders <br /> measuring
            dozens of completed projects. We build and <br /> develop mobile
            applications for several top platforms, <br />
            including Android & IOS.{" "}
          </>
        }
        imageClassName="h-[411px] w-[638px]"
        smileyBg="bg-[#08D3BB]"
      />
      <MobileSections
        image={mob2}
        isImageRight={false}
        data={
          <>
            {" "}
            EXAMPLE COMPANY (PVT) LTD is a team of experienced <br />
            mobile and web applications and website builders <br /> measuring
            dozens of completed projects. We build and <br /> develop mobile
            applications for several top platforms, <br />
            including Android & IOS.{" "}
          </>
        }
        imageClassName="ml-auto"
        smileyBg="bg-[#1090CB]"

      />
      <MobileSections
        image={focus}
        isImageRight={true}
        data={
          <>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced <br />
            mobile and web applications and website builders <br /> measuring
            dozens of completed projects. We build and <br /> develop mobile
            applications for several top platforms, <br />
            including Android & IOS.{" "}
          </>
        }
        imageClassName=" "
        smileyBg="bg-[#9208D3]"


      />
    <Containers/>
    <Company/>
      {/* new letter */}
      {/* footer */}
    </div>
  );
}
