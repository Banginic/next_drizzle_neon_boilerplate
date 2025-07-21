import { Dispatch, SetStateAction } from "react";
import { AdminType, UserType } from "./types";
import { useRouter } from "next/navigation";

export interface AppContextTypes {
  lang: "EN" | "FR";
  setLang: Dispatch<SetStateAction<"EN" | "FR">>;
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  mainSidebar: boolean;
  setMainSidebar: Dispatch<SetStateAction<boolean>>;
  adminSidebar: boolean;
  setAdminSidebar: Dispatch<SetStateAction<boolean>>;
  showMainNavbar: boolean;
  adminUser: AdminType | null;
  setAdminUser: Dispatch<SetStateAction<AdminType | null>>;
  mainUser: UserType | null;
  setMainUser: Dispatch<SetStateAction<UserType | null>>;
  router: ReturnType<typeof useRouter>;
}
