import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Ref } from "react";
import { NavBar } from "./NavBar";
import { Button } from "./Button";

// Sidebar
export function SideBar({ sidebarRef, setMenuOpen }: {
  sidebarRef: Ref<null>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return <div ref={sidebarRef} className="fixed top-[-100vh] bottom-0 h-screen z-60 w-full">
    <aside className="h-[45%] w-full p-5 flex flex-col items-center justify-start gap-8 bg-orange border-b-1 border-white">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to='/'>Adefolarin.Adejare</Link>
        </h1>
        <div className="w-8 h-8 border-2 flex items-center justify-center rounded-full border-white hover:border-black">
          <X className="cursor-pointer w-5 h-5" onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
          }} />
        </div>
      </div>
      <NavBar ulClassName="flex-col w-full" listClassName="decoration-white" />
      <Button className="border-none w-full" />
    </aside>
    <div onClick={() => setMenuOpen(false)} className="h-[55%] w-full bg-black/40 z-40" />
  </div>
}
