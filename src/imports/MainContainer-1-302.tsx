import imgForeningenRobustLogo1 from "figma:asset/d1bf836673b5cb0ecaf893d2c2640781a384f547.png";
import imgTrevorJohnWilliamsRZbwXrbGk4YUnsplash1 from "figma:asset/8843155a03f1e0c4e424a6e7b7c015644d30efc5.png";
import { useState } from "react";

function Navigation() {
  const [activeItem, setActiveItem] = useState("Prosjekter");

  const navItems = [
    { label: "Om oss", width: "w-[81px]" },
    { label: "Prosjekter", width: "w-[127px]" },
    { label: "I media", width: "w-[127px]" },
    { label: "Kontakt", width: "w-[127px]" },
  ];

  return (
    <div className="absolute content-stretch flex gap-[36px] items-start justify-center left-[calc(50%-0.5px)] text-[20px] text-center top-[17px] translate-x-[-50%] flex-wrap md:flex-nowrap px-4 md:px-0" data-name="Navigation">
      {navItems.map((item) => (
        <div
          key={item.label}
          onClick={() => setActiveItem(item.label)}
          className={`flex flex-col font-['JetBrains_Mono:Regular',sans-serif] ${
            activeItem === item.label ? "font-['JetBrains_Mono:Bold',sans-serif] font-bold" : "font-normal"
          } justify-center relative shrink-0 ${item.width} cursor-pointer hover:opacity-80 transition-opacity`}
        >
          <p className={`leading-[normal] ${activeItem === item.label ? "[text-underline-position:from-font] decoration-solid underline" : ""}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function BannerBackground() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow h-[87px] min-h-px min-w-px relative shrink-0" data-name="Banner Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[87px] items-center justify-center px-[27px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal grow h-[46px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[50px] text-right text-white">
            <p className="leading-[normal]">FORENINGEN ROBUST</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerBackground1() {
  return (
    <div className="basis-0 bg-[#ffc2c2] box-border content-stretch flex gap-[10px] grow h-[87px] items-center justify-end min-h-px min-w-px px-0 py-[9px] relative shrink-0" data-name="Banner Background">
      <div className="relative shrink-0 size-[65px]" data-name="foreningen_robust_logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgForeningenRobustLogo1} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <BannerBackground />
      <BannerBackground1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[181px] items-center relative shrink-0 w-[610px]" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[46px] leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[24px] text-right w-full">For å utvikle samfunnet til en post-kapitalistisk fremtid må vi ha flere tanker i hodet samtidig</p>
      <div className="h-[481px] relative shrink-0 w-[559px]" data-name="trevor-john-williams-RZbwXrbGK4Y-unsplash 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-6.82%] max-w-none top-0 w-[114.54%]" src={imgTrevorJohnWilliamsRZbwXrbGk4YUnsplash1} />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="basis-0 bg-[#ffc2c2] grow h-full min-h-px min-w-px relative shrink-0" data-name="Image Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[15px] py-[112px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] px-[17px] py-[112px] relative size-full text-white">
          <Navigation />
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[40px] w-[594px]">
            <p className="mb-0">{`Vi er et kunnskapskollektiv som jobber for å spre kunnskap om et postvekst samfunn. `}</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Våre tre retningsstyrere for dette arbeidet er</p>
            <p className="mb-0"> </p>
            <p className="mb-0 whitespace-pre-wrap">{`Å forankre arbeidet akademisk og    teoretisk i degrowth.`}</p>
            <p className="mb-0">{`Å jobbe for økt forestillingsevne om en fremtid vi kan glede oss til `}</p>
            <p>Å bruke kunst og kreativ formidling til å gjøre oss forstått</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-0 md:gap-[16px] items-center relative shrink-0 w-full" data-name="Content Section">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full">
        <ImageContainer />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full">
        <Component />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#ffc2c2] box-border content-stretch flex gap-[10px] h-[68px] items-center justify-center px-[15px] py-0 relative shrink-0 w-[304px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3f0000] text-[25px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Følg oss på LinkedIn</p>
      </div>
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[83px] items-start relative shrink-0" data-name="Social Media Container">
      <Container />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">
          E-post
          <br aria-hidden="true" />
          Org.nummer:
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#3f0000] h-[261px] relative shrink-0 w-full" data-name="Footer Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[261px] items-start pb-[78px] pt-[95px] px-[127px] relative w-full">
          <SocialMediaContainer />
        </div>
      </div>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Main Container">
      <Frame />
      <ContentSection />
      <FooterSection />
    </div>
  );
}