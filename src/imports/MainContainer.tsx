import imgForeningenRobustLogo1 from "figma:asset/d1bf836673b5cb0ecaf893d2c2640781a384f547.png";
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

function Header() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
      <BannerBackground />
      <BannerBackground1 />
    </div>
  );
}

function Container() {
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
      <Container />
    </div>
  );
}

function Container1() {
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
      <Container1 />
    </div>
  );
}

function Container2() {
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
      <Container2 />
    </div>
  );
}

function Container3() {
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
      <Container3 />
    </div>
  );
}

function Container4() {
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
      <Container4 />
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

function InformationSection() {
  return (
    <div className="basis-0 bg-[#d61e1e] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Information Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[17px] py-[112px] relative size-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[40px] text-white w-[594px]">
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

function Container5() {
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
      <Container5 />
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
    <div className="bg-[#3f0000] box-border content-stretch flex flex-col gap-[10px] h-[261px] items-start pb-[78px] pt-[95px] px-[127px] relative shrink-0 w-[1363.5px]" data-name="Footer Section">
      <SocialMediaContainer />
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Main Container">
      <Header />
      <ContentContainer />
      <BackgroundImage />
      <FooterSection />
    </div>
  );
}