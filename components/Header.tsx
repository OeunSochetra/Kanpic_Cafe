"use client";
import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const navbar = ["Menu", "Stocks", "Report", "Empolyee"];
  const [changeAction, setChangeAction] = useState<number | undefined>();

  const handleAction = (index: number) => {
    setChangeAction(index);
  };

  return (
    <div className="flex justify-between items-center pt-5">
      <div className="flex gap-11">
        {navbar.map((item, index: number) => (
          <ul
            key={index}
            onClick={() => handleAction(index)}
            className={`${changeAction === index ? "text-red-600" : ""}`}
          >
            <li className="pt-5 cursor-pointer hidden md:block font-[700] text-md">
              {item}
            </li>
          </ul>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div>
          <Link href="/">
            <img src="/logo.png.png" alt="logo" className="max-w-[150px]" />
          </Link>
        </div>
        <div className="flex mt-2 gap-4 justify-between items-center">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="pt-6 hidden md:block ">
        <nav className="">
          <ul className="flex gap-5 font-[600] text-[#a86666]  text-xl cursor-pointer">
            <Link href="/menu" className="hover:text-white">
              Menu
            </Link>
            <Link href="/stocks" className="hover:text-white">
              Stocks
            </Link>
            <Link href="/report" className="hover:text-white">
              Report
            </Link>
            <Link href="/empolyee" className="hover:text-white">
              Empolyee
            </Link>
          </ul>
        </nav>
      </div> */
}
