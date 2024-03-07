import Navbar from "./components/Navbar/Navbar";
import { SparklesPreview } from "./components/Sparkles/Sparkles";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center bg-myblack">
        <SparklesPreview />
      </main>
    </div>
  );
}
