import imgForeningenRobustLogo1 from "figma:asset/d1bf836673b5cb0ecaf893d2c2640781a384f547.png";
import imgBobBrewerJvuCbJHimFsUnsplash1 from "figma:asset/cbca69564eb773df9902e88e285b3f9b5b7f0828.png";
import imgMustafaAkinIY3NQuIybNuUnsplash1 from "figma:asset/c0c94c2f201663e18a3b1cdd56cc3be48f7e8f4d.png";

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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[181px] items-center relative shrink-0 w-[610px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[46px] leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[24px] text-right w-full">For å utvikle samfunnet til en post-kapitalistisk fremtid må vi holde minst to tanker i hodet samtidig</p>
      <div className="h-[556px] relative shrink-0 w-[449px]" data-name="bob-brewer-JvuCbJHimFs-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBobBrewerJvuCbJHimFsUnsplash1} />
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="basis-0 bg-[#ffc2c2] grow h-[1124px] min-h-px min-w-px relative shrink-0" data-name="Image Section">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[1124px] items-center px-[15px] py-[112px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex font-['JetBrains_Mono:Regular',sans-serif] font-normal gap-[36px] items-center leading-[0] relative shrink-0 text-[20px] text-center text-white w-full" data-name="Navigation">
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 w-[81px]">
        <p className="leading-[normal]">Om oss</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="leading-[normal]">Prosjekter</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="leading-[normal]">I media</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="leading-[normal]">Kontakt</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow h-[1118px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[88px] h-[1118px] items-start px-[12px] py-0 relative w-full">
          <Navigation />
          <p className="font-['Inter:Regular',sans-serif] font-normal h-[335px] leading-[normal] not-italic relative shrink-0 text-[24px] text-white w-[408px]">The aim of ROBUST is to contribute to reaching a resilient economy within planetary boundaries, ensuring a good life for all. The collective will promote this through activities like spreading information on degrowth practices, producing eco-solidarity-based economic analyses, showcasing regenerative economy examples, fostering artistic engagement, and participating in activism.</p>
          <div className="relative shrink-0 size-[426px]" data-name="mustafa-akin-iY3NQuIybNU-unsplash 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMustafaAkinIY3NQuIybNuUnsplash1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content Section">
      <ImageSection />
      <Container1 />
    </div>
  );
}

function Container2() {
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
      <Container2 />
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