import { useEffect, useRef, useState, type RefObject } from "react";
import projectOne from "../../1a.png";
import projectTwo from "../../1b.png";
import projectThree from "../../1c.png";

const projects = [
  {
    image: projectOne,
    alt: "Dwello Real Estate Company",
    title: "Dwello Real Estate Company",
    description:
      "A polished real estate experience designed to present listings, highlight trust, and help potential clients explore properties through a clean and conversion-focused interface.",
    tags: ["PHP", "Tailwind", "CSS", "HTML"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    image: projectTwo,
    alt: "Chat App Screenshot",
    title: "AX Gas CNG Conversion firm",
    description:
      "A collaborative chat application focused on fast communication, clean conversation flows, and responsive performance across desktop and mobile devices.",
    tags: ["HTML", "Django", "Socket.IO", "CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    image: projectThree,
    alt: "Portfolio Project Screenshot",
    title: "Mocktail Canapes",
    description:
      "A personal brand experience designed to present case studies, technical credibility, and polished UI interactions in a way that feels intentional and modern.",
    tags: ["React", "Tailwind", "TypeScript", "Vite"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    image: projectThree,
    alt: "Product Dashboard Screenshot",
    title: "Analytics Dashboard for Product and Growth Teams",
    description:
      "An internal dashboard that surfaces key product metrics, user behavior trends, and growth insights through a streamlined reporting interface.",
    tags: ["React", "Charts", "API", "Dashboard"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    image: projectOne,
    alt: "Frontend Landing Page Screenshot",
    title: "Conversion-Focused Landing Page System",
    description:
      "A modular landing page system built to help teams launch campaigns quickly while maintaining strong visual consistency and conversion-focused structure.",
    tags: ["UI Design", "Frontend", "Landing Page", "CSS"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

const INITIAL_VISIBLE = 3;

const GithubIcon = () => (
  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

type Project = {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  forceVisible?: boolean;
};

function ProjectCard({ project, index, forceVisible = false }: ProjectCardProps) {
  const [ref, scrollVisible] = useScrollReveal(0.1);
  const visible = forceVisible || scrollVisible;

  return (
    <article
      ref={ref as RefObject<HTMLElement>}
      key={`${project.alt}-${index}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-8"
    >
      <div className="overflow-hidden rounded-lg shadow-lg md:col-span-1">
        <img
          src={project.image}
          alt={project.alt}
          className="h-48 w-full rounded-lg object-cover transition-transform duration-500 hover:scale-110 md:h-auto"
        />
      </div>

      <div className="rounded-lg border border-white/20 bg-zinc-900 p-4 md:col-span-2 md:p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-300 md:px-3 md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-white md:text-xl">{project.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">{project.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 md:mt-5 md:gap-5">
          <a
            href={project.githubUrl}
            className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white md:text-base"
          >
            <GithubIcon />
            Github
          </a>
          <a
            href={project.demoUrl}
            className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white md:text-base"
          >
            <ExternalLinkIcon />
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [newlyRevealed, setNewlyRevealed] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  const handleViewMore = () => {
    setNewlyRevealed(true);
    setShowAll(true);
  };

  return (
    <section id="projects" className="bg-zinc-900 py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">My Projects</h2>
          <p className="mt-2 text-sm text-zinc-400 md:text-base">Explore my recent projects</p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {visibleProjects.map((project, index) => {
            const isNewCard = showAll && index >= INITIAL_VISIBLE;
            return (
              <ProjectCard
                key={`${project.alt}-${index}`}
                project={project}
                index={isNewCard ? index - INITIAL_VISIBLE : index}
                forceVisible={isNewCard && newlyRevealed ? false : undefined}
              />
            );
          })}
        </div>

        {/* View More / View Less Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center md:mt-12">
            <button
              onClick={showAll ? () => setShowAll(false) : handleViewMore}
              className="group relative flex items-center gap-2 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-700 hover:text-white active:scale-95 md:px-8 md:py-3.5 md:text-base"
            >
              <span>{showAll ? "View Less" : `View More (${projects.length - INITIAL_VISIBLE} more)`}</span>
              <span
                style={{
                  transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <ChevronDownIcon />
              </span>
              {/* shimmer effect on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>
          </div>
        )}

        {/* Pagination */}
        <nav className="mt-12 flex justify-center md:mt-16" aria-label="Pagination">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((page) => (
              <a
                key={page}
                href="#"
                className={`flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors md:h-9 md:w-9 ${
                  page === 2
                    ? "bg-white font-bold text-zinc-900"
                    : "border border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                }`}
                aria-current={page === 2 ? "page" : undefined}
              >
                {page}
              </a>
            ))}
            <span className="flex h-8 w-8 items-center justify-center text-sm text-zinc-500 md:h-9 md:w-9">
              ...
            </span>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 text-sm text-zinc-400 transition-colors hover:bg-zinc-800 md:h-9 md:w-9"
            >
              6
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
