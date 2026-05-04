import { useState, useEffect, useRef, type RefObject } from "react";

type EducationItem = {
  date: string;
  grade: string;
  degree: string;
  school: string;
  details: string[];
};

const educationItems: EducationItem[] = [
  {
    date: "Jan. 2022 – Aug. 2026",
    grade: "Grade: 78%",
    degree: "Bsc Software Engineering",
    school: "ICT University",
    details: [
      "Focused on advanced computing systems, distributed architecture, and performance-minded software engineering practices.",
      "Worked on technical research and implementation projects that strengthened backend problem-solving and systems thinking.",
    ],
  },
  {
    date: "Sep. 2020 – Jan. 2022",
    grade: "Dinstinction",
    degree: "Advanced Diploma in software engineering",
    school: "Aptech training center",
    details: [
      "Built a strong foundation in data structures, algorithms, databases, networking, and software design.",
      "Completed practical development work across web systems and backend-focused academic projects.",
      "Strengthened collaborative problem-solving through team assignments, presentations, and technical reviews.",
    ],
  },
  {
    date: "Feb. 2017 – Oct. 2020",
    grade: "Certificate of Completion",
    degree: "Computer Information systems",
    school: "Babcock university",
    details: [
      "Studied deployment workflows, cloud infrastructure fundamentals, CI/CD concepts, and production environment practices.",
      "Applied hands-on learning to modern engineering workflows around scalability, automation, and release readiness.",
    ],
  },
];

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
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

type AnimatedCardProps = {
  item: EducationItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function AnimatedCard({ item, index, isOpen, onToggle }: AnimatedCardProps) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(36px)",
        transition:
          "opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="rounded-2xl border border-zinc-700 bg-zinc-900/50 p-4 md:p-8"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer flex-col gap-4 text-left md:flex-row md:items-start md:justify-between"
      >
        <div className="flex-shrink-0">
          <p className="text-sm font-light text-zinc-400 md:text-base">{item.date}</p>
          <p className="text-base font-medium text-zinc-400 md:text-lg">{item.grade}</p>
        </div>

        <div className="flex-grow md:mx-8">
          <h3 className="text-xl font-semibold text-white md:text-2xl">{item.degree}</h3>
          <p className="text-sm text-zinc-400 md:text-base">{item.school}</p>
        </div>

        <svg
          className={`h-6 w-6 self-end text-white transition-transform duration-300 md:h-7 md:w-7 md:self-start ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated accordion details */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="mt-6 border-t border-zinc-700/50 pt-6 md:mt-8">
            <ul className="list-disc space-y-4 pl-6 text-sm text-zinc-400 md:pl-8 md:text-base">
              {item.details.map((detail: string) => (
                <li key={detail}>
                  <p className="leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedHeading() {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className="mb-10 md:mb-14"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">Educations</h2>
      <p className="mt-3 text-sm text-zinc-400 md:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur. Amet sed odio pellentesque porttitor nibh iaculis.
      </p>
    </div>
  );
}

export default function EducationSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="education" className="bg-black py-12 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedHeading />

        <div className="space-y-4 md:space-y-6">
          {educationItems.map((item, index) => {
            const isOpen = openIndex === index && item.details.length > 0;

            return (
              <AnimatedCard
                key={`${item.degree}-${index}`}
                item={item}
                index={index}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? -1 : index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
