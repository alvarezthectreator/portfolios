import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "Aug 2023 - Dec 2023",
    location: "Nigeria",
    role: "Software Developer (Contract)",
    company: "UNAG Services",
    description:
      "Architected and delivered a full dynamic website from scratch as the sole frontend engineer, completing the project 2 weeks ahead of schedule. Designed and implemented scalable frontend architecture using React and component-based design patterns, improving long-term maintainability.",
  },
  {
    period: "2026",
    location: "Remote",
    role: "Software Developer",
    company: "Mocktail Canapes",
    description:
      "Designed and developed the complete website for Mocktail Canapes, a hospitality brand, from concept to live production. Built a responsive, mobile-first layout with smooth UX to showcase the brand's menu and services, improving customer engagement.",
  },
  {
    period: "2025",
    location: "Remote",
    role: "Software Developer",
    company: "Mells Healing",
    description:
      "Designed and developed a fully functional appointment booking website for Mells Healing, a massage therapy company, from concept to live production. Built an intuitive booking flow with real-time availability, service selection, and confirmation notifications.",
  },
  {
    period: "2025",
    location: "Remote",
    role: "Frontend Developer",
    company: "Velosityautologistic",
    description:
      "Built and delivered the complete frontend for Velosityautologistic, a logistics company, from design to production as the sole engineer. Developed key features including shipment tracking, service request forms, and a dynamic quote calculator.",
  },
  {
    period: "Feb 2023 – May 2023",
    location: "Remote",
    role: "UI/UX Designer",
    company: "Falco (Startup)",
    description:
      "Designed user interfaces for web and mobile applications, producing pixel-perfect, accessible mockups aligned with WCAG guidelines. Created wireframes and interactive prototypes in Figma, reducing design-to-development handoff time.",
  },
  {
    period: "Jan 2023 - May 2024",
    location: "Remote",
    role: "Full Stack Developer",
    company: "TechCorp Solutions",
    description: "Built and maintained full-stack applications, ensuring seamless integration between frontend and backend systems.",
  },
  {
    period: "Aug 2022 - Dec 2022",
    location: "United States",
    role: "Frontend Developer",
    company: "Digital Innovations",
    description: "Designed and implemented responsive user interfaces for various digital products, focusing on user experience.",
  },
];

const techStack = [
  {
    name: "React",
    description: "For front-end",
    accent: "bg-cyan-500/10 text-cyan-400",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.016-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    name: "Java",
    description: "For Back-end",
    accent: "bg-orange-500/10 text-orange-400",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
      </svg>
    ),
  },
  {
    name: "Vue",
    description: "For front-end",
    accent: "bg-green-500/10 text-green-400",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 1.61H14.06L12 5.16 9.94 1.61H0L12 22.39ZM12 14.08 5.16 2.23H9.59L12 6.41l2.41-4.18h4.43Z" />
      </svg>
    ),
  },
  {
    name: "Angular",
    description: "For Back-end",
    accent: "bg-red-500/10 text-red-500",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />
      </svg>
    ),
  },
  {
    name: "Node.Js",
    description: "Back-end",
    accent: "bg-green-600/10 text-green-600",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.129.199.247.199h1.141c.071 0 .138-.031.186-.081.048-.054.074-.123.067-.196-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.02-.124-.126-.215-.253-.215h-1.137c-.141 0-.254.112-.254.253 0 1.482.806 3.248 4.655 3.248 3.35 0 4.948-1.097 4.948-3.014z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    description: "For Fron-end",
    accent: "bg-blue-500/10 text-blue-500",
    icon: (
      <svg className="h-5 w-5 md:h-7 md:w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
];

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4 text-gray-400 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6l-7 7" />
  </svg>
);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          setExperienceVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-32"
      style={{ overflow: "hidden" }}
    >
      <div className="gradient-blob absolute left-4 top-96 h-32 w-32 md:left-24 md:h-[169px] md:w-[169px]" style={{ background: "#1407D380", filter: "blur(150px)" }} />
      <div className="gradient-blob absolute left-40 top-[500px] h-32 w-32 md:left-96 md:h-[167px] md:w-[167px]" style={{ background: "#1407D380", filter: "blur(150px)" }} />

      <div className="grid grid-cols-1 items-start gap-8 md:gap-16 lg:grid-cols-2">

        {/* Experience Column */}
        <div id="experience" className="relative">
          <div className="absolute bottom-5 left-3 top-5 w-0.5 bg-gray-700/50 md:left-5" />

          <div className="relative pl-10 md:pl-16">
            <div className="has-orbit absolute -left-0.5 top-0 h-6 w-6 rounded-full border-4 border-dark-custom bg-white md:h-8 md:w-8 md:border-8" />
            <h3 className="mb-8 text-2xl font-medium text-gray-300 md:mb-12 md:text-3xl font-display">
              Experience
            </h3>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((item, index) => {
                const fromLeft = index % 2 === 0;
                return (
                  <div
                    key={`${item.role}-${item.company}`}
                    className="relative border-b border-gray-800 pb-6 md:pb-10 transition-all duration-[1200ms] ease-out"
                    style={{
                      opacity: experienceVisible ? 1 : 0,
                      transform: experienceVisible
                        ? "translateX(0)"
                        : `translateX(${fromLeft ? "-80px" : "80px"})`,
                      transitionDelay: `${index * 300}ms`,
                    }}
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex-1">
                        <p className="mb-1 text-xs text-gray-500 md:text-sm">{item.period}</p>
                        <p className="text-xs text-gray-500 md:text-sm">{item.location}</p>
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-base font-medium text-white md:text-lg">{item.role}</p>
                        <p className="text-sm text-gray-400 md:text-base">{item.company}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <a href="#" className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-[#1E1E1E] transition hover:bg-gray-800 md:h-10 md:w-10">
                          <ExternalLinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech Stack Column */}
        <div className="relative">
          <div className="absolute bottom-5 left-3 top-5 w-0.5 bg-gray-700/50 md:left-5" />

          <div className="relative pl-10 md:pl-16">
            <div className="has-orbit absolute -left-0.5 top-0 h-6 w-6 rounded-full border-4 border-dark-custom bg-white md:h-8 md:w-8 md:border-8" />
            <h3 className="mb-6 text-2xl font-medium text-gray-300 md:mb-8 md:text-3xl font-display">
              Tech stack
            </h3>

            <div className="grid grid-cols-1 gap-3 md:gap-4 sm:grid-cols-2">
              {techStack.map((item, index) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-gradient-to-b from-white/20 to-white/0 p-px transition-all duration-700"
                  style={{
                    opacity: cardsVisible ? 1 : 0,
                    transform: cardsVisible ? "translateY(0)" : "translateY(2rem)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex h-full items-center space-x-3 rounded-[15px] bg-[#1a1a1c] p-4 transition-transform duration-300 hover:scale-110 md:p-5">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl md:h-12 md:w-12 ${item.accent}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white md:text-base">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}