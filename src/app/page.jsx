import { Home } from "./components/Home/Home";

export const metadata = {
  title: "Home | Portfolio",
  description: "Portfolio de Jessy Pinto Barreto",
};

export default function HomePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center bg-myblack">
        <Home />
      </main>
    </div>
  );
}
