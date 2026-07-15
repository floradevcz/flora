import Image from "next/image";
import CategoryCard from "../components/cards/CategoryCard";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

const categories = [
  { title: "Palmy", emoji: "🌴", href: "/atlas?category=Palmy" },
  { title: "Citrusy", emoji: "🍋", href: "/atlas?category=Citrusy" },
  { title: "Pokojové", emoji: "🪴", href: "/atlas?category=Pokojové" },
  { title: "Kaktusy", emoji: "🌵", href: "/atlas?category=Kaktusy" },
];

export default function HomePage() {
  return <main className="min-h-screen bg-[#F7FAF7] pb-24 dark:bg-slate-950"><header className="relative h-72 overflow-hidden"><Image src="/images/plants/washingtonie-statna.png" alt="Washingtonie na slunné terase" fill preload sizes="(max-width: 768px) 100vw, 448px" className="object-cover" /><div className="absolute inset-0 bg-black/40" /><div className="absolute bottom-8 left-8 text-white"><h1 className="text-5xl font-bold">Flora</h1><p className="mt-2 text-lg opacity-90">Tvůj osobní průvodce světem rostlin</p></div></header><Container><section className="mt-8"><SectionTitle>Atlas rostlin</SectionTitle><p className="mb-4 text-slate-600 dark:text-slate-300">Prozkoumejte druhy nebo si přidejte rostlinu do vlastní sbírky.</p><div className="grid grid-cols-2 gap-4">{categories.map((category) => <CategoryCard key={category.title} {...category} />)}</div></section></Container></main>;
}
