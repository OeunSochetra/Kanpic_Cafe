"use client";
import { ModeToggle } from "./Theme-Toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { Suspense } from "react";
import Loading from "@/app/(root)/(routes)/loading";

const Header = () => {
  const [changeAction, setChangeAction] = useState<number | undefined>();

  const handleAction = (index: number) => {
    setChangeAction(index);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <div className="flex justify-between items-center pt-5">
      <Suspense fallback={<Loading />}>
        <div className="">
          <ul className="flex gap-5 pt-5 font-[600] text-[#fff] text-lg cursor-pointer">
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
              <img src="/logo.png.png" alt="logo" className="max-w-[130px]" />
            </Link>
          </div>
          <div className="flex mt-2 gap-4 justify-between items-center">
            <ModeToggle />
            <UserButton />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Header;
