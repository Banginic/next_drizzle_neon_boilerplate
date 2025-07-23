import React from "react";
import AppProvider from "@/context/AppProvider";
import Header from "@/components/Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div>
        <Header />
        {children}
      </div>
    </AppProvider>
  );
}

export default MainLayout;
