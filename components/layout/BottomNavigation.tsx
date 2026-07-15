"use client";

import { BookOpen, House, Leaf, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [{ href: "/", icon: House, label: "Domů" }, { href: "/atlas", icon: BookOpen, label: "Atlas" }, { href: "/my-plants", icon: Leaf, label: "Moje rostliny" }, { href: "/settings", icon: Settings, label: "Nastavení" }];
export default function BottomNavigation() { const pathname = usePathname(); return <nav aria-label="Hlavní navigace" className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"><div className="flex w-full max-w-md justify-around border-t border-gray-200 bg-white py-3 dark:border-slate-700 dark:bg-slate-900">{items.map((item) => { const Icon = item.icon; const active = item.href === "/atlas" ? pathname.startsWith("/atlas") : pathname === item.href; return <Link key={item.href} href={item.href} className={`flex max-w-20 flex-col items-center text-center text-xs transition ${active ? "text-emerald-700 dark:text-emerald-400" : "text-gray-400 dark:text-slate-400"}`}><Icon size={22} /><span className="mt-1">{item.label}</span></Link>; })}</div></nav>; }
