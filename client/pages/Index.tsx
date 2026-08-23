import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
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

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fdfea6679c9184e19966cac73ef185692%2F1a3078a3a001427c95faf582a843623b?format=webp&width=800&height=1200";

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

  return (
    <div
      className={className}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientY - bounds.top) / bounds.height - 0.5;
        const y = (event.clientX - bounds.left) / bounds.width - 0.5;
        setTilt({ x: Number((-x * 6).toFixed(2)), y: Number((y * 6).toFixed(2)) });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
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
  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="dark-site min-h-screen overflow-hidden bg-[#071d38] text-white">
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
          <div className="relative z-10"><div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#4accc0]"><span className="h-px w-9 bg-[#4accc0]" /> Part of the GTK Services Group</div><h1 className="max-w-[700px] text-[18vw] font-bold leading-[0.83] tracking-[-0.085em] sm:text-[115px] lg:text-[8.4rem]">SMALL<br /><span className="text-[#f2d369]">JOBS.</span><br />DONE RIGHT<span className="text-[#14a59c]">.</span></h1><p className="mt-8 max-w-[420px] text-base leading-7 text-white/70 sm:text-lg">Big-company quality, small-business prices — no job too small.</p><div className="mt-9 flex flex-wrap gap-3"><button type="button" onClick={() => navigate("contact")} className="flex items-center gap-3 bg-[#f2d369] px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0a2543] transition-colors hover:bg-white">Get a free site quote <ArrowRight size={15} /></button><button type="button" onClick={() => navigate("services")} className="flex items-center gap-2 border border-white/30 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#4accc0] hover:text-[#4accc0]">See what we do <ChevronDown size={15} /></button></div></div>
          <div className="hero-photo-wrap relative mx-auto w-full max-w-[660px] lg:ml-auto"><div className="hero-photo absolute -left-4 top-4 h-full w-full border border-[#f2d369]/55 sm:-left-6 sm:top-6" /><div className="relative h-[380px] overflow-hidden sm:h-[510px] lg:h-[560px]"><img src={imageUrls.hero} alt="Residential home entrance during a renovation" className="h-full w-full object-cover object-center grayscale-[15%]" /><div className="absolute inset-0 bg-gradient-to-tr from-[#071d38]/75 via-transparent to-[#13a69c]/20 mix-blend-multiply" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/40 pt-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white sm:bottom-7 sm:left-7 sm:right-7"><span>Johannesburg / South Africa</span><span>01 / 06</span></div></div><div className="absolute -bottom-6 -left-3 flex h-28 w-28 rotate-[-8deg] items-center justify-center rounded-full bg-[#14a59c] p-4 text-center text-[10px] font-bold uppercase leading-3 tracking-[0.12em] text-white shadow-xl sm:-left-10"><span>Good work<br />starts here</span></div></div>
        </div>
        <button type="button" onClick={() => navigate("difference")} className="relative mx-auto flex items-center gap-3 pb-7 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-[#f2d369]">Scroll to explore <span className="animate-bounce">↓</span></button>
      </section>

      <section id="difference" className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-24"><div><SectionLabel>The GTK Projects difference</SectionLabel><h2 className="max-w-[500px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-white sm:text-7xl">Who<br /><span className="text-[#0ba69d]">we are.</span></h2><div className="mt-10 max-w-[475px] rounded-r-xl border-l-4 border-[#f2d369] bg-white/5 p-6 text-sm italic leading-6 text-white/75">“We started GTK Projects because homeowners keep telling us the same thing: big renovation companies quote like they’re building a shopping mall for a leaking gutter. We fix that.”<span className="mt-3 block not-italic text-[10px] font-bold uppercase tracking-[0.13em] text-[#0ba69d]">— GTK Projects Team</span></div><div className="mt-8 space-y-5">{[["Honest & Affordable", "Fair, transparent pricing built for real household and small-business budgets, not corporate margins."], ["No Job Too Small", "From hanging a curtain rail to a full house extension, every job gets the same care and attention."], ["Part of GTK Services Group", "Backed by the same professionalism and reliability as GTK People Partners, our sister company."]].map(([title, text], index) => <div key={title} className="flex gap-4"><span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0ba69d]/15 text-xs font-bold text-[#42c9bd]">{index === 0 ? "✓" : index === 1 ? "▣" : "★"}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 max-w-[390px] text-xs leading-5 text-white/55">{text}</p></div></div>)}</div></div><div className="relative min-h-[470px] rounded-2xl lg:mt-12"><div className="absolute -right-3 -top-3 h-32 w-32 border-r-2 border-t-2 border-[#f2d369]" /><img src={imageUrls.extension} alt="Modern residential extension and outdoor area" className="h-[430px] w-[82%] object-cover object-center sm:h-[520px]" /><div className="absolute bottom-0 right-0 w-[46%] bg-[#0ba69d] p-5 text-white sm:p-6"><div className="grid grid-cols-2 gap-2 text-center text-[9px] font-bold uppercase leading-3 tracking-[0.09em]"><span><strong className="mb-1 block text-2xl text-[#f2d369]">✓</strong>Honest<br />quotes</span><span><strong className="mb-1 block text-2xl text-[#f2d369]">⌂</strong>Small<br />jobs</span></div></div></div></div></section>

      <section className="bg-[#0e315a] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel light>Our foundation</SectionLabel><h2 className="max-w-[620px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl">Vision, Mission<br /><span className="text-[#f2d369]">& values.</span></h2><div className="mt-14 grid gap-3 md:grid-cols-3">{[["Our vision", "To be the go-to small projects team for Johannesburg households and small businesses, proof that quality doesn’t need a big-company price tag.", "#0ba69d"], ["Our mission", "To deliver honest, reliable painting, renovation, and maintenance work on budget, on time, and without the runaround.", "#f2d369"], ["Our values", "Honesty in every quote · Respect for your home · Pride in small details · Fair pricing · Always leave it better.", "#0ba69d"]].map(([title, text, color]) => <article key={title} className="min-h-[260px] rounded-xl border border-white/10 bg-[#102f4e] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:p-7"><span className="mb-7 block h-6 w-6 rounded-full" style={{ backgroundColor: color }} /><h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f2d369]">{title}</h3><p className="mt-7 max-w-[280px] text-sm leading-6 text-white/75">{text}</p></article>)}</div></div></section>

      <section id="services" className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>What we do</SectionLabel><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-[750px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Full range of <span className="text-[#0ba69d]">small jobs</span><br />& renovations.</h2><p className="max-w-[270px] text-sm leading-6 text-white/55">From a quick fix to a considered renovation, we bring the same care to every job.</p></div><div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} onSelect={() => setSelectedService(service)} />)}</div><p className="mt-6 text-center text-[11px] italic text-[#0ba69d]">Plus: carpentry, minor electrical & plumbing fixes, small demolitions, and general property upkeep — ask us about your job.</p></div></section>

      <section id="work" className="bg-[#071d38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionLabel light>From the site</SectionLabel><h2 className="max-w-[450px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Work that<br /><span className="text-[#f2d369]">holds up.</span></h2></div><p className="max-w-[250px] text-sm leading-6 text-white/60">A few recent transformations from around Johannesburg.</p></div><div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]"><article className="relative min-h-[470px] overflow-hidden rounded-2xl bg-[#13365e] shadow-[0_22px_60px_rgba(0,0,0,0.25)]"><img src={imageUrls.wall} alt="Plaster repair work on a residential wall" className="absolute inset-0 h-full w-full object-cover opacity-85" /><div className="absolute inset-0 bg-gradient-to-t from-[#071d38] via-transparent to-transparent" /><div className="absolute bottom-6 left-6"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">Wall repairs</p><h3 className="mt-2 max-w-[300px] text-3xl font-semibold leading-5 tracking-[-0.05em] sm:text-4xl">Plastering &amp;<br />damp proofing</h3></div></article><div className="grid gap-3 sm:grid-cols-2"><article className="relative min-h-[230px] overflow-hidden bg-[#d2d8d3]"><img src={imageUrls.paint} alt="Painting a wall during a home refresh" className="h-full w-full object-cover opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/80 to-transparent" /><span className="absolute bottom-4 left-4 text-[10px] font-semibold text-white">Fresh interior &amp; exterior paint</span></article><article className="relative min-h-[230px] overflow-hidden bg-[#bdc9c5]"><img src={imageUrls.extension} alt="Brick extension under construction" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#071d38]/80 to-transparent" /><span className="absolute bottom-4 left-4 text-[10px] font-semibold text-white">Extension &amp; outdoor work</span></article><div className="flex min-h-[230px] items-end bg-[#0ba69d] p-5"><p className="max-w-[190px] text-sm font-medium leading-5 text-white">Every project gets a clear quote, a clean site and a proper finish.</p></div><div className="flex min-h-[230px] flex-col justify-between bg-[#f2d369] p-5 text-[#0a2543]"><span className="text-3xl">↗</span><p className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em]">Built for real homes.<br />Made to last.</p></div></div></div></div></section>

      <section className="dark-panel bg-[#091f38] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>Why choose GTK Projects</SectionLabel><h2 className="max-w-[760px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Built to fit your budget,<br /><span className="text-[#0ba69d]">not break it.</span></h2><div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">{reasons.map(([number, title, text]) => <article key={number} className="grid grid-cols-[48px_1fr] gap-3"><span className="text-3xl font-semibold tracking-[-0.07em] text-[#bce5dd]">{number}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-3 max-w-[380px] text-xs leading-5 text-white/55">{text}</p></div></article>)}</div><div className="mt-14 flex items-center gap-4 bg-[#0e315a] px-5 py-4 text-xs text-white sm:px-7"><MapPin size={24} className="shrink-0 text-[#0ba69d]" /><span>We operate across the <strong>Greater Johannesburg area</strong>, with projects taken on beyond borders on request.</span></div></div></section>

      <section id="process" className="dark-panel bg-[#0a2747] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-[1380px]"><SectionLabel>How we work</SectionLabel><h2 className="max-w-[650px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl">From quote<br /><span className="text-[#0ba69d]">to handover.</span></h2><div className="relative mt-14 grid gap-3 md:grid-cols-5">{processSteps.map(([number, title, text], index) => <article key={number} className="process-card relative rounded-xl border border-white/10 bg-[#102f4e] p-5 sm:min-h-[250px] sm:p-6"><div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0ba69d] text-white">{index === 4 ? <Check size={22} /> : index === 1 ? <House size={19} /> : index === 2 ? <span className="text-lg">≋</span> : index === 3 ? <Hammer size={19} /> : <Phone size={18} />}</span><span className="text-[11px] font-bold text-[#f2d369]">{number}</span></div><h3 className="mt-8 text-[13px] font-semibold leading-4 text-white">{title}</h3><p className="mt-3 text-[11px] leading-5 text-white/55">{text}</p>{index < processSteps.length - 1 && <span className="absolute -right-3 top-[41px] z-10 hidden h-px w-6 bg-[#91a5ac] md:block" />}</article>)}</div></div></section>

      <section id="contact" className="bg-[#0e315a] text-white"><div className="mx-auto grid max-w-[1380px] lg:grid-cols-[0.85fr_1.15fr]"><div className="bg-[#071d38] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><SectionLabel light>Let’s get your job done</SectionLabel><h2 className="max-w-[430px] text-6xl font-semibold leading-[0.86] tracking-[-0.075em] sm:text-8xl">LET’S GET<br /><span className="text-[#f2d369]">YOUR JOB</span><br />DONE.</h2><div className="mt-10 h-1 w-16 bg-[#f2d369]" /><p className="mt-7 max-w-[290px] text-sm italic leading-6 text-white/60">Big job or small — send us a message and we’ll come take a look, free of charge.</p><a href="mailto:info@gtkprojects.co.za?subject=Free%20site%20quote%20request" className="mt-8 inline-flex items-center gap-3 bg-[#0ba69d] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#f2d369] hover:text-[#0a2543]">Request a free site quote <ArrowRight size={14} /></a></div><div className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28"><div className="space-y-7">{[[Mail, "Email", "info@gtkprojects.co.za", "mailto:info@gtkprojects.co.za"], [Globe2, "Website", "www.gtkprojects.co.za", "https://www.gtkprojects.co.za"], [MapPin, "Address", "20 Petroy Drive, Magaliesig, Johannesburg", "#contact"]].map(([Icon, label, value, href]) => { const ContactIcon = Icon as LucideIcon; return <a key={label as string} href={href as string} className="group flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0ba69d]"><ContactIcon size={21} /></span><span><span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2d369]">{label as string}</span><span className="mt-1 block text-sm text-white/85 transition-colors group-hover:text-[#f2d369]">{value as string}</span></span></a>; })}</div><div className="mt-12 border border-white/10 bg-[#153b69] p-6"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42c9bd]">We serve</p><p className="mt-3 text-xs leading-5 text-white/65">The Greater Johannesburg area — Sandton, Randburg, Roodepoort, Midrand, Fourways, and surrounds. Projects beyond borders considered on request.</p></div></div></div></section>

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
    </main>
  );
}
