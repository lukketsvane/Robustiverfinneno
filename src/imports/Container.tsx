import imgMustafaAkinIY3NQuIybNuUnsplash1 from "figma:asset/c0c94c2f201663e18a3b1cdd56cc3be48f7e8f4d.png";

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

export default function Container() {
  return (
    <div className="bg-[#d61e1e] relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[88px] items-start px-[12px] py-0 relative size-full">
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