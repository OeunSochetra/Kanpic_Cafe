import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center gap-2">

      {/* Navbar link for page */}

      <div className="pt-6 hidden md:block ">
        <nav className="">
          <ul className="flex gap-5 font-[600] text-[#a86666]  text-xl cursor-pointer">
            <Link href='/menu' className="hover:text-white">
              Menu
            </Link>
            <Link href='/stocks' className="hover:text-white" >
              Stocks
            </Link>
            <Link href='/report' className="hover:text-white">
             Report
            </Link>
            <Link href='/empolyee' className="hover:text-white">
             Empolyee
            </Link>
          </ul>
        </nav>
      </div>

      {/* Navbar link for page */}

      <div className="flex justify-center items-center">
      <div>
        <Link href="/">
          <img src="/logo.png.png" alt="logo" className="max-w-[150px]" />
        </Link>
      </div>
      <div className="flex mt-2 gap-4 justify-between items-center">
        {/* Auth icon */}
        <ModeToggle />
        <UserButton />
      </div>
      </div>
    </div>
  );
}

export default Header;
