"use client";
import { createContext } from "react";
import { AppContextTypes } from "@/models/appContextTypes";
import { useAppContextState } from "@/hooks/useAppContextStates";

export const AppContext = createContext<AppContextTypes | null>(null);
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const values = useAppContextState();
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
