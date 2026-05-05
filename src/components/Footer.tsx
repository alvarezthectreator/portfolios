export default function Footer() {
  return (
    <>
      <div className="text-center py-4">
        <button
          className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black"
          onClick={() => window.open('/resume.pdf', '_blank')}
        >
          View Resume
        </button>
      </div>
      <footer className="bg-black py-12 md:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-full overflow-hidden text-center">
            <h1
              className="font-display whitespace-nowrap text-white uppercase font-medium"
              style={{
                fontSize: "clamp(2rem, 12vw, 171px)",
                lineHeight: "clamp(2.5rem, 15vw, 225px)",
                background:
                  "linear-gradient(173.66deg, rgba(255, 255, 255, 0.68) 5.17%, rgba(255, 255, 255, 0) 80.58%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alvarez D Creator 
            </h1>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-zinc-600 md:pt-10 md:text-sm">
          <p>© 2025 Wagwula George. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
