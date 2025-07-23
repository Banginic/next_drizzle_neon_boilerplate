"use client";
import React, { useContext } from "react";
import { Logo } from "@/components/exportComp";
import Link from "next/link";
import { Hamburger, NavLinks } from "@/components/exportComp";
import { AppContext } from "@/context/AppProvider";
import { mainNavlinks } from "@/assets/data";

function MainNavbar() {
  const { mainUser, mainSidebar, setMainSidebar } = useContext(AppContext)!;
  return (
    <header className="h-[10dvh] lg:h-[15dvh] flex lg:py-8 items-center relative max-w-[97rem] mx-auto ">
      <nav
        className={`flex items-center justify-between  w-full px-6  ${
          mainUser ? "lg:px-24" : "lg:justify-around"
        } w-full`}
      >
        <Link href={"/"}>
          <Logo logoSize={40} textSize="heading4" />
        </Link>
          <NavLinks navlinks={mainNavlinks} />
        <div className="flex items-center gap-2 lg:gap-4">
          {/*  Github btn */}
          {/*  Language */}
          {/*  Contact us / Register */}
        </div>
        <Hamburger
          isSidebarOpen={mainSidebar}
          currentUser={mainUser}
          setSidebar={setMainSidebar}
        />
      </nav>
    </header>
  );
}

export default MainNavbar;
