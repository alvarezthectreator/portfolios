import { useEffect, useRef, useState, type RefObject } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with him on the Goloka platform was a game-changer. He understood our vision for data collection across Nigerian communities and delivered a clean, intuitive dashboard that our field agents actually enjoy using.",
    name: "Emeka Okafor",
    role: "CEO, Goloka Africa",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=EmekaOkafor&backgroundColor=b6e3f4",
  },
  {
    quote:
      "He redesigned our entire BuyPower Pass interface and the difference was night and day. Our customer drop-off rate dropped significantly after launch. The attention to detail on mobile was exceptional.",
    name: "Chidi Nwosu",
    role: "CTO, BuyPower Pass",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=ChidiNwosu&backgroundColor=ffd5dc",
  },
  {
    quote:
      "We needed someone who understood both the technical side and the Nigerian user experience. He delivered a property management solution that our residents in Lagos and Abuja found genuinely easy to navigate.",
    name: "Amina Bello",
    role: "Product Lead, EstateIQ",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=AminaBello&backgroundColor=c0aede",
  },
  {
    quote:
      "From wireframe to final handoff, the process was smooth and professional. He asked the right questions, challenged assumptions where needed, and the chat app he built for our logistics team has been running flawlessly.",
    name: "Tunde Adeyemi",
    role: "Founder, SwiftFreight NG",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=TundeAdeyemi&backgroundColor=d1f4d1",
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

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
};

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      style={{
        transitionDelay: `${index * 110}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        transition:
          "opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className="flex h-72 w-full flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 md:h-80 md:p-6"
    >
      <div>
        <span className="-translate-y-2 inline-block font-serif text-5xl leading-none text-zinc-600 md:-translate-y-4 md:text-7xl">
          "
        </span>
        <p className="-mt-2 line-clamp-5 text-xs font-light leading-relaxed text-zinc-300 md:text-sm">
          {testimonial.quote}
        </p>
      </div>
      <div className="mt-auto flex items-center">
        <img
          className="mr-3 h-8 w-8 rounded-full object-cover bg-zinc-800 md:h-10 md:w-10"
          src={testimonial.avatar}
          alt={`${testimonial.name} profile picture`}
        />
        <div>
          <p className="text-sm font-normal text-white md:text-base">{testimonial.name}</p>
          <p className="text-xs font-light text-zinc-400">{testimonial.role}</p>
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
      className="mb-8 md:mb-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition:
          "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <h2 className="text-2xl font-extrabold text-white md:text-3xl">
        What my employees and Co-workers are saying
      </h2>
      <p className="mt-1 text-xs text-zinc-400 md:text-sm">
        Real feedback from Nigerian founders and product teams I've built with.
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="rounded-t-[3rem] bg-[#121212] py-16 text-white md:rounded-t-[6rem] md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedHeading />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${index}-${testimonial.name}`}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
