import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl text-purple-900 font-bold">404 - Not Found</h1>
      <Link href="/">Retour à l'accueil</Link>
    </main>
  );
}
