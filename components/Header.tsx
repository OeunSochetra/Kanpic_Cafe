"use client";
import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [changeAction, setChangeAction] = useState<number | undefined>();

  const handleAction = (index: number) => {
    setChangeAction(index);
    // set to delay loading
    // await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <div className="flex justify-between items-center pt-5">
      <div className="hidden md:block">
        <ul className="flex gap-5 pt-5 font-[600] text-[#fff] text-md cursor-pointer">
          <Link href="/">
            <li
              onClick={() => handleAction(0)}
              className={`${changeAction === 0 ? "text-[#f6d08f]" : ""}`}
            >
              Home
            </li>
          </Link>
          <Link href="/shop">
            <li
              onClick={() => handleAction(1)}
              className={`${changeAction === 1 ? "text-[#f6d08f]" : ""}`}
            >
              Shop
            </li>
          </Link>
          <Link href="/feed">
            <li
              onClick={() => handleAction(2)}
              className={`${changeAction === 2 ? "text-[#f6d08f]" : ""}`}
            >
              Feed
            </li>
          </Link>
          <Link href="/cart">
            <li
              onClick={() => handleAction(3)}
              className={`${changeAction === 3 ? "text-[#f6d08f]" : ""}`}
            >
              Cart
            </li>
          </Link>
          <Link href="/aboutus">
            <li
              onClick={() => handleAction(4)}
              className={`${changeAction === 4 ? "text-[#f6d08f]" : ""}`}
            >
              About Us
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <div>
          <Link href="/">
            <img src="/logo.png.png" alt="logo" className="max-w-[130px]" />
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
