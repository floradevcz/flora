import { ArrowUpRight, Droplets, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Plant } from "../../data/plants";

type Props = Pick<Plant, "slug" | "commonName" | "latinName" | "image" | "watering" | "sunlight">;

export default function PlantCard({ slug, commonName, latinName, image, watering, sunlight }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/atlas/${slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
        <div className="relative h-52 overflow-hidden">
          <Image src={image} alt={commonName} fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div><h2 className="text-xl font-semibold text-slate-900">{commonName}</h2><p className="mt-1 italic text-slate-500">{latinName}</p></div>
            <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-emerald-700 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
          </div>
          <div className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <p className="flex gap-2"><Droplets aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-sky-600" /><span>{watering}</span></p>
            <p className="flex gap-2"><Sun aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-amber-500" /><span>{sunlight}</span></p>
          </div>
          <p className="mt-5 font-medium text-emerald-800">Zobrazit kompletní péči <span aria-hidden="true">→</span></p>
        </div>
      </Link>
    </article>
  );
}
