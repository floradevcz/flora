import MyPlantsDashboard from "../../components/plants/MyPlantsDashboard";
import Container from "../../components/ui/Container";

export default function MyPlantsPage() {
  return <main className="min-h-screen bg-[#F7FAF7] pb-24 dark:bg-slate-950"><Container><div className="py-8"><h1 className="text-4xl font-bold text-slate-900 dark:text-white">Moje rostliny</h1><p className="mt-2 text-slate-600 dark:text-slate-300">Vaše domácí sbírka, úkoly i doporučení podle počasí.</p><MyPlantsDashboard /></div></Container></main>;
}
