import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  MoveUpRight,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  visual: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "VANTA",
    category: "Brand system / Digital",
    year: "2024",
    description:
      "A kinetic identity for a new kind of cultural membership. Built to feel as alive as the people inside it.",
    tags: ["Strategy", "Identity", "Web design"],
    visual: "vanta",
  },
  {
    number: "02",
    title: "FIELD NOTES",
    category: "Editorial / Experience",
    year: "2023",
    description:
      "An editorial platform that turns slow journalism into a tactile, curious digital ritual.",
    tags: ["Art direction", "Product", "Development"],
    visual: "field",
  },
  {
    number: "03",
    title: "ORBITAL",
    category: "Product / Launch",
    year: "2024",
    description:
      "Making the invisible visible for a hardware studio working at the edge of atmosphere and earth.",
    tags: ["Positioning", "Launch", "Campaign"],
    visual: "orbital",
  },
  {
    number: "04",
    title: "AFTERLIGHT",
    category: "Culture / Campaign",
    year: "2022",
    description:
      "A visual language for the nights, spaces and sounds that keep a city awake.",
    tags: ["Campaign", "Motion", "Photography"],
    visual: "afterlight",
  },
];

const navItems = [
  { label: "Work", id: "work" },
  { label: "Approach", id: "approach" },
  { label: "Contact", id: "contact" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "vanta") {
    return (
      <div className="project-visual project-visual-vanta" aria-hidden="true">
        <div className="vanta-word">VANTA</div>
        <div className="vanta-disc" />
        <div className="vanta-line vanta-line-one" />
        <div className="vanta-line vanta-line-two" />
        <span className="visual-caption">A NEW FREQUENCY</span>
      </div>
    );
  }

  if (type === "field") {
    return (
      <div className="project-visual project-visual-field" aria-hidden="true">
        <span className="field-kicker">VOL. 04 — THE LAND BETWEEN</span>
        <div className="field-sun" />
        <div className="field-horizon" />
        <div className="field-copy">stay<br />curious</div>
        <span className="visual-caption">FIELD NOTES / 2023</span>
      </div>
    );
  }

  if (type === "orbital") {
    return (
      <div className="project-visual project-visual-orbital" aria-hidden="true">
        <div className="planet" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <span className="orbital-label orbital-label-top">KEEP LOOKING UP</span>
        <span className="orbital-label orbital-label-bottom">∞ 00° 44' 12"</span>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-afterlight" aria-hidden="true">
      <div className="afterlight-glow" />
      <div className="afterlight-arch" />
      <div className="afterlight-slice" />
      <div className="afterlight-type">AFTER<br />LIGHT</div>
      <span className="visual-caption">EVERY NIGHT IS A BEGINNING</span>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const navigate = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-cream">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate("top")}
            className="group flex items-center gap-3 text-left"
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-lime bg-lime font-display text-[15px] font-bold tracking-[-0.08em] text-ink transition-transform duration-300 group-hover:rotate-12">
              GTK
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:block">
              Projects profile
            </span>
          </button>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id)}
                className="nav-link text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-lime"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink"
            >
              Start a project <ArrowUpRight size={13} strokeWidth={1.7} />
            </button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-ink px-5 py-6 md:hidden">
            <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className="text-left text-2xl font-medium tracking-[-0.04em] text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-[780px] px-5 pb-20 pt-36 sm:px-8 lg:min-h-screen lg:px-12 lg:pt-44">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" />
        <div className="noise pointer-events-none absolute inset-0" />
        <div className="orbital orbital-hero pointer-events-none hidden lg:block" />
        <div className="orbital orbital-hero-inner pointer-events-none hidden lg:block" />
        <div className="absolute right-[14%] top-[31%] hidden h-3 w-3 rounded-full bg-lime shadow-[0_0_30px_8px_rgba(201,255,69,0.5)] lg:block" />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            <span>Independent creative studio</span>
            <span className="hidden sm:block">Brand / Digital / Direction</span>
            <span>Scroll to explore ↓</span>
          </div>

          <div className="relative mt-24 lg:mt-0">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-lime">
              <span className="h-px w-10 bg-lime" />
              Ideas with a pulse
            </p>
            <h1 className="max-w-5xl font-display text-[17vw] font-normal leading-[0.77] tracking-[-0.085em] text-white sm:text-[15vw] lg:text-[13.3vw]">
              WE MAKE
              <br />
              <em className="relative z-10 text-lime">THINGS</em>
              <span className="hero-period">.</span>
            </h1>
            <div className="mt-9 flex max-w-[430px] items-start gap-5 lg:absolute lg:bottom-3 lg:right-[9%] lg:mt-0">
              <span className="mt-2 text-lime">✳</span>
              <p className="text-sm leading-6 text-white/62 sm:text-[15px]">
                GTK is a small, shape-shifting studio for brands that want to be impossible to ignore.
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-white/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
            <span>Based everywhere / Working anywhere</span>
            <button type="button" onClick={() => navigate("work")} className="group flex items-center gap-2 text-lime">
              View selected work
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-lime py-3 text-ink">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.16em]">
          <span>Good work takes a point of view</span><span>✳</span><span>Good work takes a point of view</span><span>✳</span><span>Good work takes a point of view</span><span>✳</span><span>Good work takes a point of view</span>
        </div>
      </div>

      <section id="work" className="relative bg-cream px-5 py-24 text-ink sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-ink/50">01 / Selected work</p>
              <h2 className="max-w-[650px] font-display text-6xl leading-[0.86] tracking-[-0.075em] sm:text-8xl lg:text-[9.5rem]">
                A FEW
                <br />
                <em className="text-plum">GOOD ONES.</em>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-6 text-ink/60">
              A rotating archive of partnerships, experiments and things we felt like making.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.number}
                onClick={() => setSelectedProject(project)}
                className={`group text-left ${index % 2 === 1 ? "sm:mt-24" : ""}`}
              >
                <div className="relative overflow-hidden rounded-[2px]">
                  <ProjectVisual type={project.visual} />
                  <div className="absolute inset-0 flex items-end justify-end bg-ink/0 p-5 transition-colors duration-500 group-hover:bg-ink/10">
                    <span className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-lime text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <MoveUpRight size={20} strokeWidth={1.7} />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-ink/15 pt-4">
                  <div>
                    <h3 className="font-display text-4xl tracking-[-0.06em]">{project.title}</h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-ink/50">{project.category}</p>
                  </div>
                  <span className="pt-2 text-[11px] font-bold tracking-[0.1em] text-ink/45">{project.year} / {project.number}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="relative overflow-hidden bg-lavender px-5 py-24 text-ink sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-ink/55">02 / Our approach</p>
              <div className="approach-shape relative mt-24 hidden h-56 w-56 sm:block">
                <div className="absolute inset-0 rounded-full border-[1px] border-ink/25" />
                <div className="absolute inset-8 rounded-full border-[1px] border-ink/25" />
                <div className="absolute inset-16 rounded-full bg-lime" />
                <span className="absolute -right-20 top-1/2 text-[10px] font-bold uppercase tracking-[0.2em]">Curiosity / 01</span>
              </div>
            </div>
            <div>
              <h2 className="max-w-4xl font-display text-6xl leading-[0.87] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">
                NO COOKIE
                <br />
                <em>CUTTERS.</em>
              </h2>
              <div className="mt-14 grid gap-8 border-t border-ink/20 pt-7 sm:grid-cols-2">
                <p className="max-w-[340px] text-lg leading-7 tracking-[-0.02em]">
                  We find the sharpest version of an idea, then make it feel obvious in hindsight.
                </p>
                <div className="text-sm leading-6 text-ink/65">
                  <p>We are strategists, designers, writers and makers who like working close to the problem.</p>
                  <button type="button" onClick={() => navigate("contact")} className="group mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-bold uppercase tracking-[0.17em] text-ink">
                    Get to know us <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 grid border-y border-ink/20 sm:grid-cols-3">
            {[
              ["01", "Find the signal", "Strategy that gets to the useful truth."],
              ["02", "Make it felt", "Identity with a little electricity in it."],
              ["03", "Keep it moving", "Digital work designed for what is next."],
            ].map(([number, title, text]) => (
              <div key={number} className="border-b border-ink/20 py-7 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
                <span className="text-[11px] font-bold text-ink/45">{number}</span>
                <h3 className="mt-10 font-display text-3xl tracking-[-0.06em]">{title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-5 text-ink/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="contact-glow pointer-events-none absolute -right-20 top-10 h-[500px] w-[500px] rounded-full bg-lime/10 blur-[100px]" />
        <div className="relative mx-auto max-w-[1440px]">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-lime">03 / Start something</p>
          <h2 className="max-w-6xl font-display text-[19vw] leading-[0.78] tracking-[-0.09em] text-white sm:text-[15vw] lg:text-[13.4vw]">
            HAVE A
            <br />
            <em className="text-lime">GOOD ONE?</em>
          </h2>
          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-white/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-[350px] text-sm leading-6 text-white/55">Bring us the half-formed thought, the impossible brief or the thing you cannot stop thinking about.</p>
            <a href="mailto:hello@gtk.projects" className="group inline-flex items-center gap-4 text-2xl tracking-[-0.04em] text-white sm:text-4xl">
              hello@gtk.projects
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight size={20} /></span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink px-5 py-8 text-white/45 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:flex-row">
          <span>© GTK Projects 2024—∞</span>
          <span>Good ideas, nicely made.</span>
          <span>Instagram / Are.na / LinkedIn</span>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} project details`}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-cream text-ink shadow-2xl">
            <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-lime hover:text-ink" aria-label="Close project details">
              <X size={18} />
            </button>
            <ProjectVisual type={selectedProject.visual} />
            <div className="grid gap-8 p-7 sm:grid-cols-[1fr_0.8fr] sm:p-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">{selectedProject.number} / {selectedProject.category}</p>
                <h2 className="mt-4 font-display text-6xl tracking-[-0.08em]">{selectedProject.title}</h2>
              </div>
              <div className="sm:pt-7">
                <p className="text-base leading-7 text-ink/70">{selectedProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => <span key={tag} className="rounded-full border border-ink/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]">{tag}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
