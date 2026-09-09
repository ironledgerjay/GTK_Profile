import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Globe2,
  Grid2X2,
  Hammer,
  House,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  Wrench,
  X,
} from "lucide-react";

const imageUrls = {
  hero: "https://images.pexels.com/photos/4567374/pexels-photo-4567374.jpeg?auto=compress&cs=tinysrgb&w=1400",
  wall: "https://images.pexels.com/photos/36495702/pexels-photo-36495702.jpeg?auto=compress&cs=tinysrgb&w=1000",
  extension: "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg?auto=compress&cs=tinysrgb&w=1200",
  paint: "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F17732c7468824b27bf862df1d9e6356f?format=webp&width=800&height=1200";

const projectImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fea61ddcd95724c919ad864b620671ee2?format=webp&width=800&height=1200", title: "Exterior paint refresh", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F0a7eeb40fd6a4915abee6189132b2f6a?format=webp&width=800&height=1200", title: "Exterior colour finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F66e4787c8b864da687ea1f41f76d5b7a?format=webp&width=800&height=1200", title: "Wall finish detail", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3aa36bf2efbc4d1db3b86c692dcb1704?format=webp&width=800&height=1200", title: "Boundary wall maintenance", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F2ae57baea2ad4a918dc3db3654d74a68?format=webp&width=800&height=1200", title: "Residential exterior repaint", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F725175eca073448c8071561b71d1efa1?format=webp&width=800&height=1200", title: "Side passage repairs", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F0f120d6e749144b4a6d2909ff215ee07?format=webp&width=800&height=1200", title: "Roofline and exterior work", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fbdb2b4bb1d644c9cb9aec38ee3a9a9b7?format=webp&width=800&height=1200", title: "Gutter and wall detail", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fc95c9849b6764f649fef5de305980164?format=webp&width=800&height=1200", title: "Exterior maintenance", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F030953f2b4cc4ed58522105b64312d40?format=webp&width=800&height=1200", title: "Window and wall finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F103a119eebb54d68ac03c2fef98b52ef?format=webp&width=800&height=1200", title: "Exterior painting work", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F45d4f6f010c645d3a6cfbe6aa2233785?format=webp&width=800&height=1200", title: "Side passage restoration", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fdbb65c1f47164b9693fc81eabf299786?format=webp&width=800&height=1200", title: "Completed exterior finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F2dab895910184f8b87ac3cd5db1e0b83?format=webp&width=800&height=1200", title: "Boundary wall finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fe01601aefe13481e980e98422d3c38d1?format=webp&width=800&height=1200", title: "Water treatment installation", category: "Water systems" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F01224ad9ada64067bfd4eb266cdc4348?format=webp&width=800&height=1200", title: "Water treatment pipework", category: "Water systems" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1d8aa3c925284a9ab5067dfd97dde6f4?format=webp&width=800&height=1200", title: "Water treatment plant", category: "Water systems" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F473b4888839641ce97408c76cd7b3288?format=webp&width=800&height=1200", title: "Water systems detail", category: "Water systems" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Ffabf7d2fcc5744ed9132c3f2f138a137?format=webp&width=800&height=1200", title: "Property maintenance", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Ff38bf360440a40fc9e2225790c464d67?format=webp&width=800&height=1200", title: "Exterior wall repair", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F90795204a02340ebba34f875f58b5f92?format=webp&width=800&height=1200", title: "Exterior painting prep", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fea763308f09a4178a9baaeb153d52abe?format=webp&width=800&height=1200", title: "Exterior finish detail", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fc288b5189a274943aed6ef6ec87f86d6?format=webp&width=800&height=1200", title: "Exterior renovation work", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F808615df3c804e428e7e5299f7af42cd?format=webp&width=800&height=1200", title: "Exterior walls and windows", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fa1bc5acf07944de39c70d3f400f22126?format=webp&width=800&height=1200", title: "Painting in progress", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fd366439538164c59aae626f345530dd6?format=webp&width=800&height=1200", title: "Peeling wall repairs", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F4df77c75205e46f1b044f1cacb66f978?format=webp&width=800&height=1200", title: "Wall restoration", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fd9d4cf78abb542b7b1ca4da5c1b00dd4?format=webp&width=800&height=1200", title: "Gate and boundary repairs", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F10efaf7249af4c69b43fdb64fc802b81?format=webp&width=800&height=1200", title: "Exterior wall repair", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F379fc2d6c2b7470c945183c72fe39153?format=webp&width=800&height=1200", title: "Home renovation site", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fae20c33d7e39445fb4ca38f588df4696?format=webp&width=800&height=1200", title: "Exterior work in progress", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3af49ea539e64b68b1fa718492b9c498?format=webp&width=800&height=1200", title: "Wall repair", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1d0acf5a214148c98cf64009f794371d?format=webp&width=800&height=1200", title: "Entrance and boundary", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F7c03de1844d44ff096cccef58a3734d7?format=webp&width=800&height=1200", title: "House exterior", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F70ee64afe07f44508b088173307058b0?format=webp&width=800&height=1200", title: "Exterior maintenance", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1732851aa47d4c91badb20eca00ac4a4?format=webp&width=800&height=1200", title: "Renovation site", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F03d8ec240d414b1c8eb7dfaae6c76861?format=webp&width=800&height=1200", title: "Wall finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F156775c4e0944c72b3e0cecbcbfcc684?format=webp&width=800&height=1200", title: "Exterior wall repair", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3211e029fd504155bebd6c6c2eff062b?format=webp&width=800&height=1200", title: "Building exterior", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fea8eaae8c5e246879ae67cc2b243dd5d?format=webp&width=800&height=1200", title: "Interior demolition", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fce3aebdc5bc0486fb00b234fece01f04?format=webp&width=800&height=1200", title: "Interior renovation", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fdc187383a6424da98d094b0b9e55015c?format=webp&width=800&height=1200", title: "Bathroom renovation", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F344f2e5cb7764cf486384e3e4dd83842?format=webp&width=800&height=1200", title: "Floor tiling", category: "Tiling" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F2dfb1ee327af42b6bb3f8228e3470490?format=webp&width=800&height=1200", title: "Drainage excavation", category: "Drainage" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F7278d4799fae44cda97a307aa8a51976?format=webp&width=800&height=1200", title: "Drainage pipework", category: "Drainage" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F33873158aecf4cc2ad5239a50fac706e?format=webp&width=800&height=1200", title: "Drainage installation", category: "Drainage" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F83ee05cd1c214995be991a7020a0792b?format=webp&width=800&height=1200", title: "Property repair", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F9e1dcf3defac4774b58a450ce2df00e1?format=webp&width=800&height=1200", title: "Boundary wall restoration", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Facb45e7760c54d14961938b99d50b925?format=webp&width=800&height=1200", title: "Exterior maintenance", category: "Maintenance" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F21d503633acb460dbdac07269fde3457?format=webp&width=800&height=1200", title: "Driveway and gate work", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F688506a1968c419ca6d8ca68160dbcaa?format=webp&width=800&height=1200", title: "Boundary wall finish", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fa192a2377fa34e51982945da013db8cb?format=webp&width=800&height=1200", title: "Exterior wall repairs", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F84e130b8c6be4ac88fc9d7bb219408ce?format=webp&width=800&height=1200", title: "Home exterior", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fcb6b6c818d824876ac05d64f508cdae5?format=webp&width=800&height=1200", title: "Interior renovation", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1787fa33ec4d4a1184ab82305ee10366?format=webp&width=800&height=1200", title: "Structural repair", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fa776c9fa305b489cad77186514bcd300?format=webp&width=800&height=1200", title: "General building work", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2Fbd20375f23b243caa06195049cc2e786?format=webp&width=800&height=1200", title: "Exterior wall repair", category: "Wall repairs" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F3dd7ae525e8c4d64b85075a0f1f3e3ed?format=webp&width=800&height=1200", title: "Property transformation", category: "Renovation" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F31b36f7a8bb047bf953f13625d04f2ef?format=webp&width=800&height=1200", title: "Exterior painting", category: "Painting" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F103577e0c8d7492ab38e9556a2dbcc9b?format=webp&width=800&height=1200", title: "Interior project", category: "Renovation" },
] as const;

type Service = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: Paintbrush,
    title: "Painting & Wall Finishes",
    items: ["Interior & exterior painting", "Wall repairs & skimming", "Damp proofing & sealing", "Wallpaper & feature walls"],
  },
  {
    icon: Hammer,
    title: "Renovations & Extensions",
    items: ["Kitchen & bathroom remodels", "Room additions & extensions", "Garage conversions", "Property upgrades"],
  },
  {
    icon: Grid2X2,
    title: "Tiling & Flooring",
    items: ["Ceramic & porcelain tiling", "Bathroom & kitchen tiling", "Screeding & waterproofing", "Vinyl & laminate flooring"],
  },
  {
    icon: House,
    title: "Roofing, Ceilings & Gutters",
    items: ["Roof leak repairs", "Gutter cleaning & install", "Ceiling boards & bulkheads", "Fascia & waterproofing"],
  },
  {
    icon: Droplets,
    title: "Plumbing, Drainage & Stormwater",
    items: ["Leak detection & repair", "Geyser installation", "Stormwater & drainage systems", "Drain unblocking"],
  },
  {
    icon: Wrench,
    title: "Handyman & General Maintenance",
    items: ["Washing machine & dishwasher fitting", "Curtain & blind hanging", "Shelving, mirrors & TV mounting", "Paving, fencing & odd jobs"],
  },
];

const reasons = [
  ["01", "Budget-Friendly, Without Compromise", "Small overheads mean fair prices; you don’t pay for a corporate structure you never see."],
  ["02", "No Job Too Small", "From fitting a washing machine or hanging curtains, to a full house extension, we take it on."],
  ["03", "Part of the GTK Services Group", "Backed by the same trust and professionalism behind GTK People Partners, our sister company."],
  ["04", "Personal, Reliable Service", "You deal directly with the team doing the work, with clear communication from quote to handover."],
];

const processSteps = [
  ["1", "Get in Touch", "Call, email, or WhatsApp us with your job: big or small."],
  ["2", "Free Site Visit", "We visit, assess the work, and talk through what you need."],
  ["3", "Straightforward Quote", "A clear, itemized quote, no hidden extras, no surprises."],
  ["4", "Work Gets Done", "Scheduled work, done properly, with respect for your home."],
  ["5", "Quality Check", "We walk through the finished job with you before we’re done."],
];

const navItems = [
  ["Services", "services"],
  ["Our work", "work"],
  ["How we work", "process"],
  ["Contact", "contact"],
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.2em] ${light ? "text-[#42c9bd]" : "text-[#149c97]"}`}>
      {children}
    </p>
  );
}

function TiltSurface({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const resetSurface = () => {
    setTilt({ x: 0, y: 0 });
    setPressed(false);
  };

  return (
    <div
      className={className}
      data-pressed={pressed}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${pressed ? 14 : 0}px) scale(${pressed ? 1.018 : 1})` }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientY - bounds.top) / bounds.height - 0.5;
        const y = (event.clientX - bounds.left) / bounds.width - 0.5;
        setTilt({ x: Number((-x * 7).toFixed(2)), y: Number((y * 7).toFixed(2)) });
      }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={resetSurface}
      onPointerCancel={resetSurface}
      onPointerLeave={resetSurface}
    >
      {children}
    </div>
  );
}

function ServiceCard({ service, onSelect }: { service: Service; onSelect: () => void }) {
  const Icon = service.icon;
  return (
    <TiltSurface className="tilt-surface">
      <button type="button" onClick={onSelect} className="service-card group block w-full rounded-xl border border-white/10 bg-[#102f4e] p-5 text-left transition-all duration-300 hover:border-[#14a59c] hover:bg-[#153b5d] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)] sm:p-6">
        <div className="mb-5 flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0ba69d]/15 text-[#42c9bd] transition-colors group-hover:bg-[#0ba69d] group-hover:text-white"><Icon size={22} strokeWidth={1.8} /></span>
          <span className="text-[10px] font-bold tracking-[0.15em] text-white/35">GTK / {String(services.indexOf(service) + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="max-w-[220px] text-[17px] font-semibold leading-5 tracking-[-0.03em] text-white">{service.title}</h3>
        <ul className="mt-4 space-y-1.5 text-[11px] leading-4 text-white/55">{service.items.map((item) => <li key={item} className="flex gap-2"><span className="text-[#14a59c]">•</span>{item}</li>)}</ul>
        <span className="service-card-gloss" aria-hidden="true" />
      </button>
    </TiltSurface>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [pageTilt, setPageTilt] = useState({ x: 0, y: 0 });
  const [pagePressed, setPagePressed] = useState(false);

  const resetPageMotion = () => {
    setPageTilt({ x: 0, y: 0 });
    setPagePressed(false);
  };

  useEffect(() => {
    if (selectedProjectIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProjectIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedProjectIndex((index) => index === null ? index : (index - 1 + projectImages.length) % projectImages.length);
      }
      if (event.key === "ArrowRight") {
        setSelectedProjectIndex((index) => index === null ? index : (index + 1) % projectImages.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProjectIndex]);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main
      className="dark-site relative isolate min-h-screen overflow-hidden text-white"
      onPointerMove={(event) => {
        const x = event.clientY / window.innerHeight - 0.5;
        const y = event.clientX / window.innerWidth - 0.5;
        setPageTilt({ x: Number((-x * 1.35).toFixed(2)), y: Number((y * 1.35).toFixed(2)) });
      }}
      onPointerDown={() => setPagePressed(true)}
      onPointerUp={resetPageMotion}
      onPointerCancel={resetPageMotion}
      onPointerLeave={resetPageMotion}
    >
      <div
        className="page-depth-backdrop"
        data-pressed={pagePressed}
        aria-hidden="true"
        style={{
          transform: `perspective(1400px) rotateX(${pageTilt.x}deg) rotateY(${pageTilt.y}deg) translateZ(${pagePressed ? 18 : 0}px) scale(${pagePressed ? 1.012 : 1})`,
          background: `radial-gradient(circle at ${50 + pageTilt.y * 18}% ${50 + pageTilt.x * 18}%, rgba(66, 204, 192, .15), transparent 34%), linear-gradient(135deg, #06172b 0%, #0a2747 47%, #071d38 100%)`,
        }}
      />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#06172b]/90 text-white shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <button type="button" onClick={() => navigate("top")} className="flex items-center gap-3 text-left" aria-label="GTK Projects home">
            <img src={logoUrl} alt="GTK Projects 3D logo" className="logo-mark h-11 w-11 rounded-[30%] object-cover" />
            <span><span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-[#f2d369]">GTK</span><span className="block text-[18px] font-bold uppercase leading-4 tracking-[-0.04em]">Projects</span></span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, id]) => <button key={id} type="button" onClick={() => navigate(id)} className="header-link text-[11px] font-semibold uppercase tracking-[0.13em] text-white/75 transition-colors hover:text-[#f2d369]">{label}</button>)}
            <button type="button" onClick={() => navigate("contact")} className="flex items-center gap-2 rounded-sm bg-[#f2d369] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a2543] transition-colors hover:bg-white">Request a quote <ArrowRight size={14} /></button>
          </nav>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center border border-white/25 lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/10 bg-[#071d38] px-5 py-5 lg:hidden"><nav className="flex flex-col gap-4" aria-label="Mobile navigation">{navItems.map(([label, id]) => <button key={id} type="button" onClick={() => navigate(id)} className="py-1 text-left text-lg font-semibold text-white">{label}</button>)}<button type="button" onClick={() => navigate("contact")} className="mt-2 flex w-fit items-center gap-2 bg-[#f2d369] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a2543]">Request a quote <ArrowRight size={14} /></button></nav></div>}
      </header>

      <section id="top" className="hero-section relative overflow-hidden bg-[#071d38] pt-[74px] text-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" /><div className="hero-swoop pointer-events-none absolute -right-40 top-24 h-[500px] w-[850px] rounded-[50%] border border-[#2bb8ac]/30" />
        <div className="mx-auto grid min-h-[650px] max-w-[1380px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.93fr_1.07fr] lg:gap-16 lg:px-10 lg:py-24">
          <div className="relative z-10"><div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#4accc0]"><span className="h-px w-9 bg-[#4accc0]" /> Part of the GTK Services Group</div><h1 className="max-w-[700px] text-[18vw] font-bold leading-[0.83] tracking-[-0.085em] sm:text-[115px] lg:text-[8.4rem]">SMALL<br /><span className="text-[#f2d369]">JOBS.</span><br />DONE RIGHT<span className="text-[#14a59c]">.</span></h1><p className="mt-8 max-w-[420px] text-base leading-7 text-white/70 sm:text-lg">Big-company quality, small-business prices, with no job too small.</p><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => navigate("contact")} className="flex items-center gap-3 bg-[#f2d369] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a2543] transition-colors hover:bg-white">Get a free site quote <ArrowRight size={15} /></button><button type="button" onClick={() => navigate("services")} className="flex items-center gap-2 border border-white/30 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#4accc0] hover:text-[#4accc0]">See what we do <ChevronDown size={15} /></button></div></div>
          <div className="hero-photo-wrap relative mx-auto w-full max-w-[660px] lg:ml-auto"><div className="hero-photo absolute -left-4 top-4 h-full w-full border border-[#f2d369]/55 sm:-left-6 sm:top-6" /><div className="relative h-[380px] overflow-hidden sm:h-[510px] lg:h-[560px]"><img src={imageUrls.hero} alt="Residential home entrance during a renovation" className="h-full w-full object-cover object-center grayscale-[15%]" /><div className="absolute inset-0 bg-gradient-to-tr from-[#071d38]/75 via-transparent to-[#13a69c]/20 mix-blend-multiply" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/40 pt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7 sm:right-7"><span>Across South Africa</span><span>01 / 06</span></div></div><div className="absolute -bottom-6 -left-3 flex h-28 w-28 rotate-[-8deg] items-center justify-center rounded-full bg-[#14a59c] p-4 text-center text-[10px] font-bold uppercase leading-3 tracking-[0.12em] text-white shadow-xl sm:-left-10"><span>Good work<br />starts here</span></div></div>
        </div>
        <button type="button" onClick={() => navigate("difference")} className="relative mx-auto flex items-center gap-3 pb-7 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-[#f2d369]">Scroll to explore <span className="animate-bounce">↓</span></button>
      </section>

      <section id="difference" className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24"><div><SectionLabel>The GTK Projects difference</SectionLabel><h2 className="max-w-[500px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-7xl">Who<br /><span className="text-[#0ba69d]">we are.</span></h2><div className="mt-10 max-w-[475px] rounded-r-xl border-l-4 border-[#f2d369] bg-white/5 p-6 text-sm italic leading-6 text-white/75">“We started GTK Projects because homeowners keep telling us the same thing: big renovation companies quote like they’re building a shopping mall for a leaking gutter. We fix that.”<span className="mt-3 block not-italic text-[10px] font-bold uppercase tracking-[0.13em] text-[#0ba69d]">GTK Projects Team</span></div><div className="mt-8 space-y-5">{[["Honest & Affordable", "Fair, transparent pricing built for real household and small-business budgets, not corporate margins."], ["No Job Too Small", "From hanging a curtain rail to a full house extension, every job gets the same care and attention."], ["Part of GTK Services Group", "Backed by the same professionalism and reliability as GTK People Partners, our sister company."]].map(([title, text], index) => <div key={title} className="flex gap-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0ba69d]/15 text-xs font-bold text-[#42c9bd]">{index === 0 ? "✓" : index === 1 ? "▣" : "★"}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 max-w-[390px] text-xs leading-5 text-white/55">{text}</p></div></div>)}</div></div><div className="relative min-h-[470px] rounded-2xl lg:mt-12"><div className="absolute -right-3 -top-3 h-32 w-32 border-r-2 border-t-2 border-[#f2d369]" /><img src={imageUrls.extension} alt="Modern residential extension and outdoor area" className="h-[430px] w-[82%] object-cover object-center sm:h-[520px]" /><div className="absolute bottom-0 right-0 w-[46%] bg-[#0ba69d] p-5 text-white sm:p-6"><div className="grid grid-cols-2 gap-2 text-center text-[9px] font-bold uppercase leading-3 tracking-[0.09em]"><span><strong className="mb-1 block text-2xl text-[#f2d369]">✓</strong>Honest<br />quotes</span><span><strong className="mb-1 block text-2xl text-[#f2d369]">⌂</strong>Small<br />jobs</span></div></div></div></div></section>

      <section className="bg-[#0e315a] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel light>Our foundation</SectionLabel><h2 className="max-w-[620px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl">Vision, Mission<br /><span className="text-[#f2d369]">& values.</span></h2><div className="mt-14 grid gap-3 md:grid-cols-3">{[["Our vision", "To be the go-to small projects team for Johannesburg households and small businesses, proof that quality doesn’t need a big-company price tag.", "#0ba69d"], ["Our mission", "To deliver honest, reliable painting, renovation, and maintenance work on budget, on time, and without the runaround.", "#f2d369"], ["Our values", "Honesty in every quote · Respect for your home · Pride in small details · Fair pricing · Always leave it better.", "#0ba69d"]].map(([title, text, color]) => <article key={title} className="min-h-[260px] rounded-xl border border-white/10 bg-[#102f4e] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:p-7"><span className="mb-7 block h-6 w-6 rounded-full" style={{ backgroundColor: color }} /><h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f2d369]">{title}</h3><p className="mt-7 max-w-[280px] text-sm leading-6 text-white/75">{text}</p></article>)}</div></div></section>

      <section id="services" className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>What we do</SectionLabel><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-[750px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Full range of <span className="text-[#0ba69d]">small jobs</span><br />& renovations.</h2><p className="max-w-[270px] text-sm leading-6 text-white/55">From a quick fix to a considered renovation, we bring the same care to every job.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} onSelect={() => setSelectedService(service)} />)}</div><p className="mt-6 text-center text-[11px] italic text-[#0ba69d]">Plus: carpentry, minor electrical & plumbing fixes, small demolitions, and general property upkeep. Ask us about your job.</p></div></section>

      <section id="work" className="bg-[#071d38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel light>Our work</SectionLabel>
              <h2 className="max-w-[600px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Real work.<br /><span className="text-[#f2d369]">Properly done.</span></h2>
            </div>
            <p className="max-w-[340px] text-sm leading-6 text-white/60">Browse recent GTK Projects work across painting, renovations, wall repairs, drainage, tiling, and water systems.</p>
          </div>
          <div className="mt-8 flex items-center justify-between border-y border-white/10 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">
            <span>{projectImages.length} project photos</span>
            <span className="text-[#42c9bd]">Tap any image to view</span>
          </div>
          <div className="gallery-grid mt-8">
            {projectImages.map((project, index) => (
              <button
                key={`${project.src}-${index}`}
                type="button"
                onClick={() => setSelectedProjectIndex(index)}
                className="gallery-tile group relative mb-3 block w-full overflow-hidden rounded-xl border border-white/10 bg-[#102f4e] text-left shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
                aria-label={`View ${project.title}`}
              >
                <img src={project.src} alt={project.title} loading={index > 5 ? "lazy" : "eager"} decoding="async" className="block h-auto w-full transition duration-500 group-hover:scale-[1.04]" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071d38] via-[#071d38]/70 to-transparent px-4 pb-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-[#42c9bd]">{project.category}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">{project.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>


      <section className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>Why choose GTK Projects</SectionLabel><h2 className="max-w-[760px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Built to fit your budget,<br /><span className="text-[#0ba69d]">not break it.</span></h2><div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">{reasons.map(([number, title, text]) => <article key={number} className="grid grid-cols-[48px_1fr] gap-3"><span className="text-3xl font-semibold tracking-[-0.07em] text-[#bce5dd]">{number}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-3 max-w-[380px] text-xs leading-5 text-white/55">{text}</p></div></article>)}</div><div className="mt-14 flex items-center gap-4 bg-[#0e315a] px-5 py-4 text-xs text-white sm:px-7"><MapPin size={24} className="shrink-0 text-[#0ba69d]" /><span>We operate across the <strong>Greater Johannesburg area</strong>, with projects taken on beyond borders on request.</span></div></div></section>

      <section id="process" className="dark-panel bg-[#0a2747] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>How we work</SectionLabel><h2 className="max-w-[650px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">From quote<br /><span className="text-[#0ba69d]">to handover.</span></h2><div className="relative mt-14 grid gap-3 md:grid-cols-5">{processSteps.map(([number, title, text], index) => <article key={number} className="process-card relative rounded-xl border border-white/10 bg-[#102f4e] p-5 sm:min-h-[250px] sm:p-6"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0ba69d] text-white">{index === 4 ? <Check size={22} /> : index === 1 ? <House size={19} /> : index === 2 ? <span className="text-lg">≋</span> : index === 3 ? <Hammer size={19} /> : <Phone size={18} />}</span><span className="text-[11px] font-bold text-[#f2d369]">{number}</span></div><h3 className="mt-8 text-[13px] font-semibold leading-4 text-white">{title}</h3><p className="mt-3 text-[11px] leading-5 text-white/55">{text}</p>{index < processSteps.length - 1 && <span className="absolute -right-3 top-[41px] z-10 hidden h-px w-6 bg-[#91a5ac] md:block" />}</article>)}</div></div></section>

      <section id="contact" className="bg-[#0e315a] text-white"><div className="mx-auto grid max-w-[1380px] lg:grid-cols-[0.85fr_1.15fr]"><div className="bg-[#071d38] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><SectionLabel light>Let’s get your job done</SectionLabel><h2 className="max-w-[430px] text-6xl font-semibold leading-[0.86] tracking-[-0.075em] sm:text-8xl">LET’S GET<br /><span className="text-[#f2d369]">YOUR JOB</span><br />DONE.</h2><div className="mt-10 h-1 w-16 bg-[#f2d369]" /><p className="mt-7 max-w-[290px] text-sm italic leading-6 text-white/60">Big job or small, send us a message and we will come take a look and give you a quote</p><a href="mailto:info@gtkprojects.co.za?subject=Free%20site%20quote%20request" className="mt-8 inline-flex items-center gap-3 bg-[#0ba69d] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#f2d369] hover:text-[#0a2543]">Request a free site quote <ArrowRight size={14} /></a></div><div className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28"><div className="space-y-7">{[[Mail, "Email", "info@gtkprojects.co.za", "mailto:info@gtkprojects.co.za"], [Globe2, "Website", "www.gtkprojects.co.za", "https://www.gtkprojects.co.za"], [MapPin, "Address", "20 Petroy Drive, Magaliesig, Johannesburg", "#contact"]].map(([Icon, label, value, href]) => { const ContactIcon = Icon as LucideIcon; return <a key={label as string} href={href as string} className="group flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0ba69d]"><ContactIcon size={21} /></span><span><span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2d369]">{label as string}</span><span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-[#f2d369]">{value as string}</span></span></a>; })}</div><div className="mt-12 border border-white/10 bg-[#153b69] p-6"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">We serve</p><p className="mt-3 text-xs leading-5 text-white/65">The Greater Johannesburg area  Sandton, Randburg, Roodepoort, Midrand, Fourways, and surrounds. Projects beyond borders considered on request.</p></div></div></div></section>

      <footer className="border-t border-white/10 bg-[#06172b] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-[1380px] gap-10 sm:grid-cols-[1.3fr_0.7fr_1fr]">
          <div><button type="button" onClick={() => navigate("top")} className="flex items-center gap-3 text-left"><img src={logoUrl} alt="GTK Projects 3D logo" className="h-12 w-12 rounded-[30%] object-cover" /><span><span className="block text-[10px] font-semibold uppercase tracking-[0.19em] text-[#f2d369]">GTK</span><span className="block text-lg font-bold uppercase leading-4 tracking-[-0.04em] text-white">Projects</span></span></button><p className="mt-5 max-w-[280px] text-sm leading-6 text-white/45">Small jobs, renovations and maintenance done properly across Johannesburg.</p></div>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">Explore</p><div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">{navItems.map(([label, id]) => <button type="button" key={id} onClick={() => navigate(id)} className="transition-colors hover:text-[#f2d369]">{label}</button>)}</div></div>
          <div className="sm:text-right"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">Let’s talk</p><a href="mailto:info@gtkprojects.co.za" className="mt-4 inline-block text-lg tracking-[-0.03em] text-white transition-colors hover:text-[#f2d369]">info@gtkprojects.co.za</a><p className="mt-2 text-sm text-white/45">Johannesburg, South Africa</p></div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1380px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] font-semibold uppercase tracking-[0.17em] text-white/35 sm:flex-row"><span>© 2025 / 2026 GTK Projects. All rights reserved.</span><span>Part of the GTK Services Group</span></div>
      </footer>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071d38]/75 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selectedService.title} details`}>
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#102f4e] p-7 text-white shadow-2xl sm:p-9">
            <button type="button" onClick={() => setSelectedService(null)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#071d38] text-white transition-colors hover:bg-[#0ba69d]" aria-label="Close service details"><X size={17} /></button>
            <img src={logoUrl} alt="GTK Projects 3D logo" className="mb-6 h-20 w-20 rounded-[24%] object-cover" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0ba69d]">GTK Projects service</p>
            <h2 className="mt-2 max-w-[380px] text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-white">{selectedService.title}</h2>
            <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">{selectedService.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-white/60"><Check size={16} className="mt-0.5 shrink-0 text-[#0ba69d]" />{item}</li>)}</ul>
            <a href="mailto:info@gtkprojects.co.za?subject=GTK%20Projects%20service%20enquiry" className="mt-8 inline-flex items-center gap-2 bg-[#f2d369] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a2543]">Ask about this service <ArrowRight size={14} /></a>
          </div>
        </div>
      )}

      {selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020d1c]/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="GTK Projects work gallery"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProjectIndex(null);
          }}
        >
          <button type="button" onClick={() => setSelectedProjectIndex(null)} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#0ba69d] sm:right-8 sm:top-8" aria-label="Close project gallery"><X size={20} /></button>
          <button type="button" onClick={() => setSelectedProjectIndex((index) => index === null ? index : (index - 1 + projectImages.length) % projectImages.length)} className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#0ba69d] sm:left-8" aria-label="Previous project photo"><ArrowLeft size={20} /></button>
          <figure className="flex max-h-[calc(100vh-5rem)] max-w-[min(980px,calc(100vw-5rem))] flex-col items-center justify-center">
            <img src={projectImages[selectedProjectIndex].src} alt={projectImages[selectedProjectIndex].title} className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-[0_30px_90px_rgba(0,0,0,0.5)]" />
            <figcaption className="mt-5 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">{projectImages[selectedProjectIndex].category}</p>
              <p className="mt-2 text-lg font-semibold text-white">{projectImages[selectedProjectIndex].title}</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">{selectedProjectIndex + 1} of {projectImages.length}</p>
            </figcaption>
          </figure>
          <button type="button" onClick={() => setSelectedProjectIndex((index) => index === null ? index : (index + 1) % projectImages.length)} className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-[#0ba69d] sm:right-8" aria-label="Next project photo"><ArrowRight size={20} /></button>
        </div>
      )}
    </main>
  );
}
