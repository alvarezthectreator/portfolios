export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-12 text-white md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-br from-indigo-900/40 to-black/0 opacity-60 mix-blend-screen" />
        </div>

        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-lg md:gap-12 md:rounded-3xl md:p-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-8 md:space-y-10">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Got an Idea? <span className="block">share it with me</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              <a href="#" className="group flex items-center justify-between rounded-xl bg-zinc-900 p-3 transition duration-150 hover:bg-zinc-800 md:p-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#0A66C2] md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.602c0-3.321-4.11-3.136-4.11 0v5.602h-3v-11h3v1.765c1.396-2.586 7.11-2.483 7.11 3.518v5.717z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">LinkedIn</p>
                    <p className="text-xs text-zinc-400 md:text-sm">Connect with me on LinkedIn</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-white transition duration-150 group-hover:translate-x-1 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#" className="group flex items-center justify-between rounded-xl bg-zinc-900 p-3 transition duration-150 hover:bg-zinc-800 md:p-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-white md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.742.083-.727.083-.727 1.205.084 1.839 1.237 1.839 1.237 1.07 1.832 2.808 1.309 3.497.994.108-.77.418-1.309.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.798 24 17.292 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">GitHub</p>
                    <p className="text-xs text-zinc-400 md:text-sm">Check my github profile</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-white transition duration-150 group-hover:translate-x-1 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#" className="group flex items-center justify-between rounded-xl bg-zinc-900 p-3 transition duration-150 hover:bg-zinc-800 md:p-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-white md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.985 6.44c-.732.322-1.517.537-2.337.636.848-.508 1.503-1.314 1.814-2.274-.793.473-1.677.818-2.61.996-1.879-1.997-5.064-1.024-5.064 1.587 0 .373.045.733.136 1.077-4.204-.213-7.931-2.237-10.424-5.322-.435.748-.684 1.61-.684 2.53 0 1.744.887 3.28 2.235 4.179-.824-.025-1.595-.251-2.277-.631v.031c0 2.428 1.725 4.453 4.018 4.92-.42.115-.86.177-1.318.177-.323 0-.638-.033-.941-.089.637 1.995 2.486 3.447 4.676 3.486-1.713 1.34-3.868 2.14-6.22 2.14-.404 0-.799-.023-1.189-.068 2.217 1.42 4.846 2.247 7.643 2.247 9.177 0 15.341-7.625 15.341-15.341 0-.234-.005-.466-.014-.698.813-.586 1.517-1.312 2.078-2.146z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">Twitter</p>
                    <p className="text-xs text-zinc-400 md:text-sm">I share development tips on twitter</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-white transition duration-150 group-hover:translate-x-1 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a href="mailto:example@domain.com" className="group flex items-center justify-between rounded-xl bg-zinc-900 p-3 transition duration-150 hover:bg-zinc-800 md:p-4">
                <div className="flex items-center space-x-3">
                  <svg className="h-5 w-5 text-[#EA4335] md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713.25 3.914h23.5L12 12.713zm-12-7.713 12 9 12-9v14h-24v-14z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white md:text-base">Email</p>
                    <p className="text-xs text-zinc-400 md:text-sm">Shoot me a mail</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-white transition duration-150 group-hover:translate-x-1 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/60 p-6 shadow-lg md:p-8">
            <h3 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">Send me message</h3>

            <form className="space-y-4 md:space-y-6">
              <label htmlFor="full_name" className="block">
                <span className="sr-only text-sm text-zinc-400">Full name</span>
                <input
                  type="text"
                  id="full_name"
                  placeholder="Input your name"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/50 focus:ring-1 focus:ring-white md:px-4 md:py-3 md:text-base"
                />
              </label>

              <label htmlFor="email" className="block">
                <span className="sr-only text-sm text-zinc-400">Email</span>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/50 focus:ring-1 focus:ring-white md:px-4 md:py-3 md:text-base"
                />
              </label>

              <label htmlFor="message" className="block">
                <span className="sr-only text-sm text-zinc-400">Message</span>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-white/50 focus:ring-1 focus:ring-white md:px-4 md:py-3 md:text-base"
                />
              </label>

              <button type="submit" className="flex w-full items-center justify-center space-x-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-md transition duration-150 hover:bg-zinc-200 md:px-6 md:py-3 md:text-base">
                <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Send me message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
