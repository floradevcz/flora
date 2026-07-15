import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#F6F8F5] dark:bg-slate-950">
      <main className="relative mx-auto min-h-screen max-w-md overflow-hidden bg-white shadow-xl dark:bg-slate-950">
        {children}

        <BottomNavigation />
      </main>
    </div>
  );
}
