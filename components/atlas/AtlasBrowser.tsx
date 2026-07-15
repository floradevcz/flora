"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Plant } from "../../data/plants";
import PlantCard from "../cards/PlantCard";

export default function AtlasBrowser({ plants, initialCategory }: { plants: Plant[]; initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => plants.filter((plant) => `${plant.commonName} ${plant.latinName} ${plant.category}`.toLocaleLowerCase("cs").includes(query.toLocaleLowerCase("cs"))), [plants, query]);
  return <><label className="relative mt-6 block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hledat rostlinu nebo kategorii…" className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" /></label><p className="mt-3 text-sm text-slate-500">{query ? `${visible.length} výsledků` : initialCategory ? `Rostliny v kategorii ${initialCategory}` : `${visible.length} rostlin v atlasu`}</p><div className="mt-5 space-y-6">{visible.map((plant) => <PlantCard key={plant.id} {...plant} />)}{visible.length === 0 && <p className="rounded-2xl bg-white p-5 text-slate-500 shadow-sm">Nic jsme nenašli. Zkuste jiné jméno nebo kategorii.</p>}</div></>;
}
