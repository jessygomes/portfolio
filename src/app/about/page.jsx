import { SparklesCore } from "../components/UI/Sparkles";
import AboutContent from "../components/AboutContent/AboutContent";

export const metadata = {
  title: "About | Portfolio",
  description: "About Jessy Pinto Barreto",
};

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center bg-myblack"
    >
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={2}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <section className="w-full relative h-screen flex items-center justify-center z-20">
          <AboutContent />
        </section>
      </div>
    </section>
  );
}
