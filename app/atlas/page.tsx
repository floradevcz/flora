import Link from "next/link";
import AtlasBrowser from "../../components/atlas/AtlasBrowser";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { plants } from "../../data/plants";

type AtlasPageProps = { searchParams: Promise<{ category?: string }> };
export default async function AtlasPage({ searchParams }: AtlasPageProps) {
  const { category } = await searchParams;
  const filtered = category ? plants.filter((plant) => plant.category === category) : plants;
  return <main className="min-h-screen bg-[#F7FAF7] pb-24 dark:bg-slate-950"><Container><div className="py-8"><SectionTitle>Atlas rostlin</SectionTitle><p className="text-slate-600 dark:text-slate-300">{category ? `Kategorie: ${category}` : "Vyberte rostlinu a zobrazte kompletní návod k péči."}</p>{category && <Link href="/atlas" className="mt-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">Zobrazit všechny rostliny</Link>}<AtlasBrowser plants={filtered} initialCategory={category} /></div></Container></main>;
}
