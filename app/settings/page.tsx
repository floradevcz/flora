import Preferences from "../../components/settings/Preferences";

export default function SettingsPage() {
  return <main className="min-h-screen bg-[#F7FAF7] p-8 pb-24 dark:bg-slate-950"><h1 className="text-4xl font-bold text-slate-900 dark:text-white">Nastavení</h1><p className="mt-3 text-slate-600 dark:text-slate-300">Správa vzhledu a upozornění aplikace.</p><Preferences /></main>;
}
