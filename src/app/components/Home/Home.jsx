import React from "react";

import { SparklesCore } from "../UI/Sparkles";
import Presentation from "../Presentation/Presentation";

export function Home() {
  return (
    <div className="h-auto relative w-full overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#7E5EA5"
        />
      </div>
      <section className="w-full h-screen flex items-center justify-center z-20">
        <Presentation />
      </section>
    </div>
  );
}
