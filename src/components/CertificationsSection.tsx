import badgeImage from "../../a.png";

const certifications = [
  {
    date: "June 24, 2025",
    label: "Front-end Certificate",
    title: "AWS Certified Developer – Associate",
    issuer: "AWS, Google",
    href: "#",
  },
  {
    date: "March 12, 2024",
    label: "Backend Engineering Certificate",
    title: "Professional Java Spring Development",
    issuer: "Oracle, Spring Academy",
    href: "#",
  },
  {
    date: "November 8, 2023",
    label: "Cloud & DevOps Achievement",
    title: "Microsoft Certified: SQL AI Developer Associate (beta)",
    issuer: "Microsoft",
    href: "#",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-black py-12 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">Certifications and achievements</h2>
          <p className="mt-3 text-sm text-zinc-400 md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Amet sed odio pellentesque porttitor nibh iaculis.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {certifications.map((item, index) => (
            <div key={`${item.title}-${index}`} className="flex flex-col gap-4 rounded-2xl border border-zinc-700 bg-zinc-900/50 p-4 transition-colors duration-200 hover:bg-zinc-800/50 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="flex-shrink-0">
                  <img src={badgeImage} alt="Certificate" className="h-12 w-12 md:h-16 md:w-16" />
                </div>
                <div>
                  <div className="text-sm font-light text-zinc-400 md:text-base">{item.date}</div>
                  <div className="text-base font-medium text-zinc-300 md:text-lg">{item.label}</div>
                </div>
              </div>

              <div className="flex-grow md:ml-8">
                <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                <p className="text-sm text-zinc-400 md:text-base">{item.issuer}</p>
              </div>

              <a href={item.href} target="_blank" rel="noreferrer" className="ml-auto self-end text-zinc-500 transition-colors hover:text-white md:self-center">
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
