"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  BookOpen,
  Leaf,
  Bell,
  Settings
} from "lucide-react";

const items = [
  {
    href: "/",
    icon: House,
    label: "Domů",
  },
  {
    href: "/atlas",
    icon: BookOpen,
    label: "Atlas",
  },
  {
    href: "/my-plants",
    icon: Leaf,
    label: "Moje",
  },
  {
    href: "/care",
    icon: Bell,
    label: "Péče",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Více",
  },
];

export default function BottomNavigation() {

  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center z-50">

      <div className="w-full max-w-md bg-white border-t border-gray-200 flex justify-around py-3">

        {items.map((item) => {

          const Active = pathname === item.href;

          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs transition ${
                Active
                  ? "text-green-700"
                  : "text-gray-400"
              }`}
            >
              <Icon size={22} />

              <span className="mt-1">
                {item.label}
              </span>

            </Link>
          );

        })}

      </div>

    </nav>
  );

}