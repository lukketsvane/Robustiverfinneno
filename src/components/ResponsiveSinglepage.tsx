import imgForeningenRobustLogo1 from "figma:asset/d1bf836673b5cb0ecaf893d2c2640781a384f547.png";
import imgBobBrewerJvuCbJHimFsUnsplash1 from "figma:asset/cbca69564eb773df9902e88e285b3f9b5b7f0828.png";
import imgMustafaAkinIY3NQuIybNuUnsplash1 from "figma:asset/c0c94c2f201663e18a3b1cdd56cc3be48f7e8f4d.png";
import imgTrevorJohnWilliamsRZbwXrbGk4YUnsplash1 from "figma:asset/8843155a03f1e0c4e424a6e7b7c015644d30efc5.png";
import imgSkjermbilde20251021Kl1035436 from "figma:asset/d932cf0e114ae9d4b48059ef6ad8e0e3aa9d1af4.png";
import imgBackgroundImage from "figma:asset/866d0ede8081277bb3885906ba5cac2b683d97f2.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Banner Header Component
function BannerHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Banner - Red */}
        <div className="basis-0 bg-[#d61e1e] grow min-h-[60px] md:h-[87px] relative flex items-center justify-between px-3 md:px-[27px] py-2 md:py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#ffc2c2] transition-colors z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Title */}
          <div className="flex-1 flex justify-end md:justify-center">
            <p className="font-['JetBrains_Mono:Regular',sans-serif] text-white text-lg md:text-[50px] leading-none">
              FORENINGEN ROBUST
            </p>
          </div>
        </div>

        {/* Right Banner - Pink */}
        <div className="basis-0 bg-[#ffc2c2] grow min-h-[60px] md:h-[87px] flex items-center justify-end px-3 md:px-6 py-2 md:py-3">
          <div className="size-10 md:size-[65px] hidden md:block">
            <img
              alt="Foreningen Robust Logo"
              className="w-full h-full object-cover"
              src={imgForeningenRobustLogo1}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3f0000] w-full z-10 border-t border-[#d61e1e]">
          <nav className="flex flex-col p-3 space-y-1">
            {["Om oss", "Prosjekter", "I media", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-['JetBrains_Mono:Regular',sans-serif] text-white hover:text-[#ffc2c2] py-2 px-3 rounded transition-colors hover:bg-[#d61e1e]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

// Desktop Navigation Component
function DesktopNavigation({ activeItem }: { activeItem: string }) {
  const navItems = [
    { name: "Om oss", id: "om-oss" },
    { name: "Prosjekter", id: "prosjekter" },
    { name: "I media", id: "i-media" },
    { name: "Kontakt", id: "kontakt" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="hidden md:flex flex-nowrap absolute left-0 right-0 top-[17px] justify-between px-4 text-center z-10">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.id)}
          className={`font-['JetBrains_Mono:Regular',sans-serif] text-white text-[20px] transition-all duration-300 hover:opacity-80 whitespace-nowrap relative ${
            activeItem === item.name
              ? "font-['JetBrains_Mono:Bold',sans-serif] font-bold"
              : "font-normal"
          }`}
        >
          {item.name}
          <span
            className={`absolute bottom-[-4px] left-0 h-[2px] bg-white transition-all duration-300 ${
              activeItem === item.name ? "w-full" : "w-0"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

// Content Section 1: Image (Pink) + Text (Red)
function ContentSection1({ activeSection }: { activeSection: string }) {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Pink section with image */}
      <div className="basis-0 grow bg-[#ffc2c2] flex items-center justify-center px-4 md:px-[15px] py-8 md:py-[112px]">
        <div className="flex flex-col gap-6 md:gap-[181px] items-center max-w-[610px] w-full">
          <p className="font-['Inter:Regular',sans-serif] text-[#3f0000] text-base md:text-[24px] text-right leading-normal w-full">
            For å utvikle samfunnet til en post-kapitalistisk fremtid må vi holde minst to tanker i hodet samtidig
          </p>
          <div className="w-full max-w-[449px] aspect-[449/556]">
            <img
              alt="Penguin"
              className="w-full h-full object-cover"
              src={imgBobBrewerJvuCbJHimFsUnsplash1}
            />
          </div>
        </div>
      </div>

      {/* Red section with navigation and text */}
      <div className="basis-0 grow bg-[#d61e1e] flex items-center justify-center px-4 md:px-[12px] py-8 md:py-[112px] relative min-h-[400px] md:min-h-[600px]">
        <DesktopNavigation activeItem={activeSection} />
        
        <div className="flex flex-col gap-6 md:gap-[88px] w-full max-w-[420px] mt-0 md:mt-0">
          <p className="font-['Inter:Regular',sans-serif] text-white text-base md:text-[24px] leading-normal">
            The aim of ROBUST is to contribute to reaching a resilient economy within planetary boundaries, ensuring a good life for all. The collective will promote this through activities like spreading information on degrowth practices, producing eco-solidarity-based economic analyses, showcasing regenerative economy examples, fostering artistic engagement, and participating in activism.
          </p>

          <div className="w-full max-w-[426px] aspect-square mx-auto md:mx-0">
            <img
              alt="Nature"
              className="w-full h-full object-contain md:object-cover"
              src={imgMustafaAkinIY3NQuIybNuUnsplash1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Content Section 2: Text (Red) + Image (Pink)
function ContentSection2({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) {
  return (
    <div id="om-oss" className="flex flex-col md:flex-row w-full">
      {/* Red section with navigation */}
      <div className="basis-0 grow bg-[#d61e1e] relative flex items-center justify-center px-4 md:px-[17px] py-8 md:py-[112px] min-h-[400px] md:min-h-[500px]">
        <DesktopNavigation activeItem={activeSection} />
        
        <div className="max-w-[594px] w-full mt-8 md:mt-0">
          <div className="font-['Inter:Regular',sans-serif] text-white text-lg md:text-[40px] leading-normal space-y-3 md:space-y-4">
            <p>Vi er et kunnskapskollektiv som jobber for å spre kunnskap om et postvekst samfunn.</p>
            <p className="mt-4 md:mt-6">Våre tre retningsstyrere for dette arbeidet er</p>
            <p className="mt-3 md:mt-4">Å forankre arbeidet akademisk og teoretisk i degrowth.</p>
            <p>Å jobbe for økt forestillingsevne om en fremtid vi kan glede oss til</p>
            <p>Å bruke kunst og kreativ formidling til å gjøre oss forstått</p>
          </div>
        </div>
      </div>

      {/* Pink section with image */}
      <div className="basis-0 grow bg-[#ffc2c2] flex items-center justify-center px-4 md:px-[15px] py-8 md:py-[112px]">
        <div className="flex flex-col gap-6 md:gap-[181px] items-center max-w-[610px] w-full">
          <p className="font-['Inter:Regular',sans-serif] text-[#3f0000] text-base md:text-[24px] text-right leading-normal w-full">
            For å utvikle samfunnet til en post-kapitalistisk fremtid må vi ha flere tanker i hodet samtidig
          </p>
          <div className="w-full max-w-[559px] aspect-[559/481]">
            <img
              alt="Snail shell"
              className="w-full h-full object-cover"
              src={imgTrevorJohnWilliamsRZbwXrbGk4YUnsplash1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Profile Card Component
function ProfileCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex gap-4 items-start w-full max-w-[450px]">
      <div className="w-[120px] md:w-[181px] h-[150px] md:h-[219px] flex-shrink-0">
        <img
          alt={name}
          className="w-full h-full object-cover"
          src={imgSkjermbilde20251021Kl1035436}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <p className="font-['Inter:Regular',sans-serif] text-[#3f0000] text-base md:text-[18px] font-semibold">
          {name}
        </p>
        <p className="font-['Inter:Regular',sans-serif] text-[#3f0000] text-sm md:text-[18px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

// Team Section
function TeamSection({ activeSection }: { activeSection: string }) {
  const teamMembers = [
    { name: "Christina Lund", description: "Aula er en digital plattform som forenkler deltakelse i lokaldemokratiet. Innbyggere kan dele sine tanker og kunnskap når det passer dem." },
    { name: "Eline Mannino", description: "Aula er en digital plattform som gjør det lett å engasjere seg i lokaldemokratiet. Innbyggere kan bidra med innspill og kunnskap når det passer dem." },
    { name: "Thomas Røkås", description: "Aula er en digital plattform som gjør det enkelt å være med i lokaldemokratiet. Innbyggere kan dele sine meninger og kunnskap når det passer dem." },
    { name: "Sigrid Løvlie", description: "Aula er en digital plattform som gjør det lett å delta i lokaldemokratiet. Innbyggere kan dele innspill og kunnskap når det passer dem." },
    { name: "Anna Nordahl Carlsen", description: "Aula er en digital plattform som forenkler deltakelse i lokaldemokratiet. Innbyggere kan dele sine tanker og kunnskap når det passer dem." },
  ];

  return (
    <div id="prosjekter" className="flex flex-col md:flex-row w-full">
      {/* Pink section with profiles */}
      <div className="basis-0 grow bg-[#ffc2c2] flex justify-center px-4 md:px-[15px] py-8 md:py-[107px]">
        <div className="flex flex-col gap-4 md:gap-4 w-full max-w-[500px]">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} name={member.name} description={member.description} />
          ))}
        </div>
      </div>

      {/* Red section with navigation */}
      <div className="basis-0 grow bg-[#d61e1e] relative flex items-center justify-center px-4 md:px-[17px] py-8 md:py-[112px] min-h-[400px] md:min-h-[500px]">
        <DesktopNavigation activeItem={activeSection} />
        
        <div className="max-w-[594px] w-full mt-8 md:mt-0">
          <div className="font-['Inter:Regular',sans-serif] text-white text-lg md:text-[40px] leading-normal space-y-3 md:space-y-4">
            <p>Vi er et kunnskapskollektiv som jobber for å spre kunnskap om et postvekst samfunn.</p>
            <p className="mt-4 md:mt-6">Våre tre retningsstyrere for dette arbeidet er</p>
            <p className="mt-3 md:mt-4">Å forankre arbeidet akademisk og teoretisk i degrowth.</p>
            <p>Å jobbe for økt forestillingsevne om en fremtid vi kan glede oss til</p>
            <p>Å bruke kunst og kreativ formidling til å gjøre oss forstått</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inspirational Background Section
function InspirationSection({ activeSection }: { activeSection: string }) {
  return (
    <div id="i-media" className="relative w-full min-h-[400px] md:h-[960px] flex items-center justify-center px-4 md:px-[13px] py-8 md:py-[7px]">
      <img
        alt="Snail shell background"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgBackgroundImage}
      />
      <div className="relative z-10 max-w-[1254px] w-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] text-white text-lg md:text-[48px] leading-normal text-right">
          <span className="block mb-3 md:mb-4">
            Sneglhuset er perfekt konstruert for at sneglen skal kunne bære det med sin egen muskelkraft.
          </span>
          <span className="block">
            Gjennom de siste tiårene har det blitt et internasjonalt symbol for nedvekst-bevegelsen til inspirasjon for oss mennesker om å ikke bære mer enn det jorden vår - hjemmet vårt - klarer
          </span>
        </p>
      </div>
    </div>
  );
}

// Footer Component
function Footer({ activeSection }: { activeSection: string }) {
  return (
    <div id="kontakt" className="bg-[#3f0000] w-full px-4 md:px-[127px] py-12 md:py-[95px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[83px] items-start">
        <button className="bg-[#ffc2c2] px-6 py-4 rounded hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
          <p className="font-['Inter:Regular',sans-serif] text-[#3f0000] text-xl md:text-[25px] whitespace-nowrap">
            Følg oss på LinkedIn
          </p>
        </button>
        <div className="font-['Inter:Regular',sans-serif] text-white text-lg md:text-[24px] leading-normal">
          <p className="mb-2">E-post: kontakt@foreningenrobust.no</p>
          <p>Org.nummer: 123 456 789</p>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function ResponsiveSinglepage() {
  const [activeSection, setActiveSection] = useState("Om oss");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "om-oss", name: "Om oss" },
        { id: "prosjekter", name: "Prosjekter" },
        { id: "i-media", name: "I media" },
        { id: "kontakt", name: "Kontakt" }
      ];

      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <BannerHeader />
      <ContentSection1 activeSection={activeSection} />
      <ContentSection2 activeSection={activeSection} setActiveSection={setActiveSection} />
      <TeamSection activeSection={activeSection} />
      <InspirationSection activeSection={activeSection} />
      <Footer activeSection={activeSection} />
    </div>
  );
}