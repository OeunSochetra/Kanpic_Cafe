"use client";
import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const HeaderUi = () => {
  const [changeAction, setChangeAction] = useState<number | undefined>();

  const handleAction = (index: number) => {
    setChangeAction(index);
    // set to delay loading
    // await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <div className="flex justify-between items-center pt-5">
      <div className="hidden md:block">
        <ul className="flex gap-5 pt-5 font-[600] text-black text-md cursor-pointer">
          <Link href="/menu">
            <li
              onClick={() => handleAction(0)}
              className={`${changeAction === 0 ? "text-[#1677ff]" : ""}`}
            >
              Menu
            </li>
          </Link>
          <Link href="/employee">
            <li
              onClick={() => handleAction(1)}
              className={`${changeAction === 1 ? "text-[#1677ff]" : ""}`}
            >
              Employee
            </li>
          </Link>
          <Link href="/products">
            <li
              onClick={() => handleAction(2)}
              className={`${changeAction === 2 ? "text-[#1677ff]" : ""}`}
            >
              Products
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
        <div className="flex gap-4 justify-between items-center">
          {/* <ModeToggle /> */}
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default HeaderUi;
