import AnoAI from "@/components/ui/animated-shader-background";
import { GLSLHills } from "@/components/ui/glsl-hills";

export default function DemoOne() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div className="absolute inset-0 z-[2]">
        <AnoAI />
      </div>
      <div className="pointer-events-none absolute z-10 px-6 text-center">
        <div
          className="absolute left-1/2 top-[32%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-wormhole-spin md:top-[28%] md:h-[440px] md:w-[440px]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(20,6,44,0.18), rgba(60,24,122,0.54), rgba(26,8,58,0.2), rgba(92,38,170,0.5), rgba(20,6,44,0.18)), radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(10,3,24,0.98) 30%, rgba(24,8,54,0.94) 44%, rgba(44,16,92,0.82) 58%, rgba(72,28,138,0.52) 72%, rgba(20,6,44,0.12) 88%, rgba(2,0,23,0) 100%)",
          }}
        />
        <div className="relative space-y-6">
        <h1 className="whitespace-pre-wrap text-4xl font-semibold leading-tight text-white md:text-6xl">
          <span className="mb-3 block text-xl font-medium md:text-3xl">
            Welcome I am Alvarez D Creator
          </span>
          Lead Software Engineer | Fullstack Engineer
        </h1>
        <p className="text-sm text-white/60 md:text-base">
          Throughout my career, I&apos;ve honed my expertise in crafting
          seamless digital products by blending user research, UX/UI design,
          and prototyping.
        </p>
        </div>
      </div>
    </section>
  );
}
