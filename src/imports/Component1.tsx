function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[36px] h-[46px] items-start justify-center left-[calc(50%-0.5px)] text-[20px] text-center top-[17px] translate-x-[-50%] w-[585px]" data-name="Navigation">
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[46px] justify-center relative shrink-0 w-[81px]">
        <p className="leading-[normal]">Om oss</p>
      </div>
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="[text-underline-position:from-font] decoration-solid leading-[normal] underline">Prosjekter</p>
      </div>
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="leading-[normal]">I media</p>
      </div>
      <div className="flex flex-col font-['JetBrains_Mono:Regular',sans-serif] font-normal h-[46px] justify-center relative shrink-0 w-[127px]">
        <p className="leading-[normal]">Kontakt</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#d61e1e] relative size-full" data-name="Component 1">
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