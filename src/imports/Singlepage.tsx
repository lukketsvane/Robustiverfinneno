import imgForeningenRobustLogo1 from "figma:asset/d1bf836673b5cb0ecaf893d2c2640781a384f547.png";
import imgBobBrewerJvuCbJHimFsUnsplash1 from "figma:asset/cbca69564eb773df9902e88e285b3f9b5b7f0828.png";
import imgMustafaAkinIY3NQuIybNuUnsplash1 from "figma:asset/c0c94c2f201663e18a3b1cdd56cc3be48f7e8f4d.png";
import imgTrevorJohnWilliamsRZbwXrbGk4YUnsplash1 from "figma:asset/8843155a03f1e0c4e424a6e7b7c015644d30efc5.png";
import imgSkjermbilde20251021Kl1035436 from "figma:asset/d932cf0e114ae9d4b48059ef6ad8e0e3aa9d1af4.png";
import imgBackgroundImage from "figma:asset/866d0ede8081277bb3885906ba5cac2b683d97f2.png";

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

function Frame4() {
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

function Navigation1() {
  return (
    <div className="absolute content-stretch flex font-['JetBrains_Mono:Regular',sans-serif] gap-[36px] h-[46px] items-start justify-center left-[calc(50%-0.5px)] text-center top-[17px] translate-x-[-50%] w-[585px]" data-name="Navigation">
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[0px] w-[81px]">
        <p className="[text-underline-position:from-font] decoration-solid font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] text-[20px] underline">Om oss</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">Prosjekter</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">I media</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">Kontakt</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow h-full min-h-px min-w-px relative shrink-0" data-name="Component 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col font-normal gap-[10px] items-center justify-center leading-[0] px-[17px] py-[112px] relative size-full text-white">
          <Navigation1 />
          <div className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] w-[594px]">
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

function ContentSection1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Content Section">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Component />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <ImageContainer />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[18px] w-[217px]" data-name="Container">
      <p className="h-[36px] relative shrink-0 w-full">Christina Lund</p>
      <p className="relative shrink-0 w-full">Aula er en digital plattform som forenkler deltakelse i lokaldemokratiet. Innbyggere kan dele sine tanker og kunnskap når det passer dem.</p>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0" data-name="Profile Section">
      <div className="h-[219px] relative shrink-0 w-[181px]" data-name="Skjermbilde 2025-10-21 kl. 10.35.43 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.09%] left-[-16.57%] max-w-none top-[-0.04%] w-[135.36%]" src={imgSkjermbilde20251021Kl1035436} />
        </div>
      </div>
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[18px] w-[217px]" data-name="Container">
      <p className="h-[36px] relative shrink-0 w-full">Eline Mannino</p>
      <p className="relative shrink-0 w-full">Aula er en digital plattform som gjør det lett å engasjere seg i lokaldemokratiet. Innbyggere kan bidra med innspill og kunnskap når det passer dem.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
      <div className="h-[219px] relative shrink-0 w-[181px]" data-name="Skjermbilde 2025-10-21 kl. 10.35.43 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.09%] left-[-16.57%] max-w-none top-[-0.04%] w-[135.36%]" src={imgSkjermbilde20251021Kl1035436} />
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[18px] w-[217px]" data-name="Container">
      <p className="h-[36px] relative shrink-0 w-full">Thomas Røkås</p>
      <p className="relative shrink-0 w-full">Aula er en digital plattform som gjør det enkelt å være med i lokaldemokratiet. Innbyggere kan dele sine meninger og kunnskap når det passer dem.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
      <div className="h-[219px] relative shrink-0 w-[181px]" data-name="Skjermbilde 2025-10-21 kl. 10.35.43 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.09%] left-[-16.57%] max-w-none top-[-0.04%] w-[135.36%]" src={imgSkjermbilde20251021Kl1035436} />
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[18px] w-[217px]" data-name="Container">
      <p className="h-[36px] relative shrink-0 w-full">Sigrid Løvlie</p>
      <p className="relative shrink-0 w-full">Aula er en digital plattform som gjør det lett å delta i lokaldemokratiet. Innbyggere kan dele innspill og kunnskap når det passer dem.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
      <div className="h-[219px] relative shrink-0 w-[181px]" data-name="Skjermbilde 2025-10-21 kl. 10.35.43 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.09%] left-[-16.57%] max-w-none top-[-0.04%] w-[135.36%]" src={imgSkjermbilde20251021Kl1035436} />
        </div>
      </div>
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-[#3f0000] text-[18px] w-[217px]" data-name="Container">
      <p className="h-[36px] relative shrink-0 w-full">Anna Nordahl Carlsen</p>
      <p className="relative shrink-0 w-full">Aula er en digital plattform som forenkler deltakelse i lokaldemokratiet. Innbyggere kan dele sine tanker og kunnskap når det passer dem.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
      <div className="h-[219px] relative shrink-0 w-[181px]" data-name="Skjermbilde 2025-10-21 kl. 10.35.43 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.09%] left-[-16.57%] max-w-none top-[-0.04%] w-[135.36%]" src={imgSkjermbilde20251021Kl1035436} />
        </div>
      </div>
      <Container6 />
    </div>
  );
}

function ProfileList() {
  return (
    <div className="basis-0 bg-[#ffc2c2] grow min-h-px min-w-px relative shrink-0" data-name="Profile List">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[15px] py-[107px] relative w-full">
          <ProfileSection />
          <Frame />
          <Frame1 />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="absolute content-stretch flex font-['JetBrains_Mono:Regular',sans-serif] gap-[36px] h-[46px] items-start justify-center left-[calc(50%-0.5px)] text-center top-[17px] translate-x-[-50%] w-[585px]" data-name="Navigation">
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[0px] w-[81px]">
        <p className="[text-underline-position:from-font] decoration-solid font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[normal] text-[20px] underline">Om oss</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">Prosjekter</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">I media</p>
      </div>
      <div className="flex flex-col h-[46px] justify-center relative shrink-0 text-[20px] w-[127px]">
        <p className="leading-[normal]">Kontakt</p>
      </div>
    </div>
  );
}

function InformationSection() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Information Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col font-normal gap-[10px] items-center justify-center leading-[0] px-[17px] py-[112px] relative size-full text-white">
          <Navigation2 />
          <div className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[40px] w-[594px]">
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

function ContentContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content Container">
      <ProfileList />
      <InformationSection />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="h-[960px] relative shrink-0 w-full" data-name="Background Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackgroundImage} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[960px] items-center justify-center px-[13px] py-[7px] relative w-full">
          <div className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[48px] text-right text-white w-[1254px]">
            <p className="mb-0">Sneglhuset er perfekt konstruert for at sneglen skal kunne bære det med sin egen muskelkraft.</p>
            <p className="mb-0">&nbsp;</p>
            <p>{` Gjennom de siste tiårene har det blitt et internasjonalt symbol for nedvekst-bevegelsen til inspirasjon for oss mennesker om å ikke bære mer enn det jorden vår - hjemmet vårt - klarer`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
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
      <Container7 />
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

export default function Singlepage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="singlepage">
      <Frame4 />
      <ContentSection />
      <ContentSection1 />
      <ContentContainer />
      <BackgroundImage />
      <FooterSection />
    </div>
  );
}