import React from "react";
import AppProvider from "@/context/AppProvider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div>{children}</div>
    </AppProvider>
  );
}

export default MainLayout;
