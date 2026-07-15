import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#F6F8F5]">
      <main className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative overflow-hidden">
        {children}

        <BottomNavigation />
      </main>
    </div>
  );
}