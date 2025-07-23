"use client";
import { AppContext } from "@/context/AppProvider";
import React, { useContext } from "react";
import MainNavbar from "./MainNavbar";

function Header() {
  const { showMainNavbar } = useContext(AppContext)!;
  return (
    <div
      className={`${
        showMainNavbar
          ? "fixed right-2 left-2 top-2 lg:right-5 lg:left-5 shadow rounded backdrop-blur-lg bg-black/30 max-w-[97rem] mx-auto "
          : ""
      } z-40`}
    >
      <MainNavbar />
    </div>
  );
}

export default Header;
