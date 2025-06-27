import Link from "next/link";
import { itemsNavbar } from "./Navbar.data";
import { ModeToggle } from "../ui/toggle-theme";

export const Navbar = () => {
  return (
    <div className="fixed z-20 flex flex-col items-center w-full justify-center mt-auto h-max bottom-10">
      <div className="flex items-center gap-2 justify-center px-4 py-1 bg-slate-200 dark:bg-slate-800 background-blur-sm rounded-full">
        {itemsNavbar.map(({ icon, id, link }) => (
          <div
            key={id}
            className="cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-600 px-3 py-2 rounded-full transition duration-150"
          >
            <Link href={link}>{icon}</Link>
          </div>
        ))}
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
