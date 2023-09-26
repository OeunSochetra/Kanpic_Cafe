"use client";
import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [changeAction, setChangeAction] = useState<number | undefined>();

  const handleAction = (index: number) => {
    setChangeAction(index);
  };

  return (
    <div className="flex justify-between items-center pt-5">
      <div className="">
        <ul className="flex gap-5 pt-8 font-[600] text-[#fff] text-lg cursor-pointer">
          <Link href="/menu">
            <li
              onClick={() => handleAction(0)}
              className={`${changeAction === 0 ? "text-[#f6d08f]" : ""}`}
            >
              Menu
            </li>
          </Link>
          <Link href="/stocks">
            <li
              onClick={() => handleAction(1)}
              className={`${changeAction === 1 ? "text-[#f6d08f]" : ""}`}
            >
              Stocks
            </li>
          </Link>
          <Link href="/reportpage">
            <li
              onClick={() => handleAction(2)}
              className={`${changeAction === 2 ? "text-[#f6d08f]" : ""}`}
            >
              Report
            </li>
          </Link>
          <Link href="/empolyee">
            <li
              onClick={() => handleAction(3)}
              className={`${changeAction === 3 ? "text-[#f6d08f]" : ""}`}
            >
              Empolyee
            </li>
          </Link>
        </ul>
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
