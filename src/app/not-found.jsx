import Link from "next/link";
import { SparklesCore } from "../../src/app/components/UI/Sparkles";

export default function NotFound() {
  return (
    <div className="h-auto relative w-full overflow-hidden rounded-md bg-black z-10">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1}
          className="w-full h-full"
          particleColor="#7E5EA5"
        />
      </div>
      <section className="w-full h-screen flex items-center justify-center z-50">
        <button
          type="submit"
          className="p-[0.5rem] text-white neon hover:text-white font-aldrich tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-purple-800 hover:ring-2 hover:ring-purple-600 hover:shadow-xl"
        >
          <Link href="/">404 - SUIVEZ LA LUEUR</Link>
        </button>
      </section>
    </div>
  );
}
