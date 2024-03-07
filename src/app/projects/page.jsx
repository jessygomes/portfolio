import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { SparklesCore } from "../components/UI/Sparkles";
import ProjectContent from "../components/ProjectsContent/ProjectContent";

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col items-center gradient-bg">
      <div className="h-auto relative w-full overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#7E5EA5"
          />
        </div>
        <section className="w-full relative flex items-center justify-center z-20 mt-[10rem]">
          <ProjectContent />
        </section>
      </div>
    </section>
  );
}
